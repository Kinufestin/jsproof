const NFTs = [];

function mintNFT(nft) {
    NFTs.push(nft);
    return nft;
}

function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log(NFTs[i]);
    }
    console.log("------------------");
}

function getTotalSupply() {
    console.log(`Total Supply: ${NFTs.length}`);
    console.log("------------------");
}

// Call your functions below this line

mintNFT({name: "Jordan", size: "11", properties: "Cotton", color: "Brown", brand: "Nike"});
listNFTs();

mintNFT({name: "Harden", size: "13", properties: "Cotton", color: "Monogram", brand: "Adidas"});
mintNFT({name: "Old Skool", size: "15", properties: "Cotton", color: "Black", brand: "Vans"});
listNFTs();

getTotalSupply();
