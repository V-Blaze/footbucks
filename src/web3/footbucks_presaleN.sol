// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";

contract Presale is ReentrancyGuard {
    // Immutable variables
    IERC20Upgradeable public immutable presaleToken; // ERC20 token for presale
    address public immutable communityWallet; // Wallet to receive community funds
    address public constant burnAddress = 0x000000000000000000000000000000000000dEaD; // Burn address
    address public immutable owner; // Contract owner's address

    // Constants
    uint8 private constant vestingPeriods = 4; // Number of vesting periods
    uint256 public pricePerTokenInWei = 6000000000; // 0.000000006 ethers/token (18 decimal places)
    uint256 public referralRewardPercentage; // Referral reward percentage

    // State variables
    // mapping(address => uint256) public referralRewards; // Referral rewards for each address
    mapping(address => uint256) public lockedUntil; // Lock timestamp for each address
    mapping (address => uint256) public vestedTokens; // Vested tokens for each address

    uint256 public launchTimestamp; // Timestamp when presale starts
    uint256 public presaleEndTime; // Timestamp when presale ends
    uint256 public vestingTime = 60 days; // Vesting period duration
    uint256 public TotalReferralAccumulated; // Total referral rewards accumulated

    // Constructor
    constructor(
        address _presaleTokenAddress,
        address _communityWalletAddress,
        uint256 _rewardPercentage,
        uint256 _launchTimestamp,
        uint256 _presaleEndTime
    ) {
        presaleToken = IERC20Upgradeable(_presaleTokenAddress);
        communityWallet = _communityWalletAddress;
        referralRewardPercentage = _rewardPercentage;
        launchTimestamp = _launchTimestamp;
        presaleEndTime = _presaleEndTime;
        owner = msg.sender;
    }

    // Modifier to restrict function access to the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    // Function to set the launch timestamp
    function setLaunchTimestamp(uint256 _timestamp) external onlyOwner {
        launchTimestamp = _timestamp;
    }

    // Function to set the presale end time
    function setPresaleEndTime(uint256 _timestamp) external onlyOwner {
        presaleEndTime = _timestamp;
    }

    // Function to set the vesting time
    function setVestingTime(uint256 _time) external onlyOwner {
        vestingTime = _time;
    }

    // Function to buy tokens in the presale
    function buyTokens() external payable nonReentrant {
        // Check presale timing
        require(block.timestamp >= launchTimestamp, "Presale has not started yet");
        require(block.timestamp <= presaleEndTime, "Presale has ended");

        // Calculate Ether amount and perform checks
        uint256 ethAmount = msg.value;
        require(ethAmount >= 100000000000000000, "Minimum purchase: 0.1 BNB");
        require(ethAmount <= 10000000000000000000, "Maximum purchase: 10 BNB");

        // Calculate token amount based on Ether sent
        uint256 tokenAmount = (ethAmount) / pricePerTokenInWei;

        // Ensure token amount is reasonable
        require(tokenAmount > 0, "Token amount is too low");
        require(presaleToken.balanceOf(address(this)) >= tokenAmount, "Insufficient tokens in the contract");

        // Calculate immediate release and remaining tokens
        uint256 immediateRelease = tokenAmount * 20 / 100;
        require(presaleToken.transfer(msg.sender, immediateRelease), "Token transfer failed");

        uint256 remainingTokens = tokenAmount - immediateRelease;

        // // Calculate referral reward and update TotalReferralAccumulated
        // if (_referrer != address(0)) {
        //     uint256 referralReward = calculateReferralReward(tokenAmount);
        //     referralRewards[_referrer] += referralReward;
        //     TotalReferralAccumulated += referralReward;
        // }

        // Update vested tokens and lock until timestamp
        vestedTokens[msg.sender] = remainingTokens;
        lockedUntil[msg.sender] = block.timestamp + vestingTime;
    }

    // // Function to claim referral rewards
    // function claimReferralReward() external nonReentrant {
    //     uint256 reward = referralRewards[msg.sender];
    //     require(reward > 0, "No reward to claim");
    //     referralRewards[msg.sender] = 0;
    //     require(presaleToken.transferFrom(communityWallet, msg.sender, reward), "Token transfer failed");
    // }

    // Function to unlock vested tokens
    function unlockTokens() external nonReentrant {
        require(lockedUntil[msg.sender] <= block.timestamp, "Tokens are locked");

        uint256 tokenAmount = vestedTokens[msg.sender];
        uint256 unlockedAmount = tokenAmount * 20 / 100;

        lockedUntil[msg.sender] = block.timestamp + vestingTime;
        vestedTokens[msg.sender] = tokenAmount - unlockedAmount;

        require(presaleToken.transfer(msg.sender, unlockedAmount), "Token transfer failed");
    }

    // // Function to calculate referral reward based on purchased amount
    // function calculateReferralReward(uint256 _purchasedAmount) internal view returns (uint256) {
    //     return (_purchasedAmount * referralRewardPercentage) / 100;
    // }

    // Function to withdraw Ether in case of emergency
    function emergencyWithdrawEther(uint256 amount) external onlyOwner {
        require(amount <= address(this).balance, "Insufficient balance");
        payable(msg.sender).transfer(amount);
    }

    // Function to withdraw BEP20 tokens in case of emergency
    function emergencyWithdrawBEP20(address tokenAddress, uint256 amount) external onlyOwner {
        IERC20Upgradeable token = IERC20Upgradeable(tokenAddress);
        require(amount <= token.balanceOf(address(this)), "Insufficient balance");
        require(token.transfer(msg.sender, amount), "Token transfer failed");
    }

    // Fallback function to receive Ether
    receive() external payable {}
}
