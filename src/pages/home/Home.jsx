import { useNavigate } from "react-router-dom";
import drop from "../../assets/icons/drop.webp";
import token from "../../assets/icons/token.webp";
import "./home.css";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            {/* Top Section */}
            <h1 className="h1">thirdweb Deploy - Custom Staking Contract</h1>
            <div className="nftBoxGrid">
                <div
                    className="optionSelectBox"
                    role="button"
                    onClick={() => navigate("/mint")}
                >
                    {/* Mint a new NFT */}
                    <img src={drop} alt="drop" width={64} height={64} />
                    <h2 className="selectBoxTitle">Mint a new NFT</h2>
                    <p className="selectBoxDescription">
                        Use the NFT Drop Contract to claim an NFT from the collection.
                    </p>
                </div>

                <div
                    className="optionSelectBox"
                    role="button"
                    onClick={() => navigate("/stake")}
                >
                    {/* Staking an NFT */}
                    <img src={token} alt="token" width={64} height={64} />
                    <h2 className="selectBoxTitle">Stake Your NFTs</h2>
                    <p className="selectBoxDescription">
                        Use the custom staking contract deployed via <b>thirdweb Deploy</b>{" "}
                        to stake your NFTs, and earn tokens from the <b>Token</b> contract.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;