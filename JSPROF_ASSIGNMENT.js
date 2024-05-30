function NFT(name, eyeColor, shirtType, bling) {
    this.name = name;          // Name of the NFT
    this.eyeColor = eyeColor;  // Eye color of the NFT character
    this.shirtType = shirtType; // Type of shirt the NFT character is wearing
    this.bling = bling;        // Special accessory or item the NFT character has
}


let nftCollection = [];


function mintNFT(name, eyeColor, shirtType, bling) {
    const newNFT = new NFT(name, eyeColor, shirtType, bling); 
    nftCollection.push(newNFT); 
}


function printNFTDetails() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`); 
        console.log(`  Name: ${nft.name}`); 
        console.log(`  Eye Color: ${nft.eyeColor}`);
        console.log(`  Shirt Type: ${nft.shirtType}`); 
        console.log(`  Bling: ${nft.bling}`); 
        console.log('--------------------------'); 
    });
}


function printTotalSupply() {
    console.log(`Total NFT Supply: ${nftCollection.length}`); 
}


mintNFT("Epic Dragon", "Red", "Armor", "Golden Sword");
mintNFT("Mystic Elf", "Green", "Robe", "Magic Staff");


mintNFT("Cyber Punk", "Blue", "Leather Jacket", "Holo Goggles");


printNFTDetails();


printTotalSupply();
