# Class + Boolean 
class TV {
  constructor(brand) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
  }

  increaseVolume() {
    if (this.volume < 100) {
      this.volume++;
      console.log("Volume", this.volume);
    }
  }
  decreaseVolume() {
    if (this.volume >= 0) {
      this.volume--;
      console.log("Volume", this.volume);
    }
  }
  getNewChannel() {
    this.channel = Math.floor(Math.random() * 51);
    console.log(`Channel: ${this.channel}`);
  }

  getTVstatus() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }

  resetTV() {
    if(this.volume !== 1 || this.channel !== 50) {
      this.channel = 1;
      this.volume = 50
    }
  }
}

const tv = new TV("Panasonic");
tv.increaseVolume();
tv.decreaseVolume();
tv.getNewChannel();
console.log(tv.getTVstatus());
tv.resetTV();
console.log(tv.getTVstatus());
// Volume 51
// Volume 50
// Channel: 8
// Panasonic at channel 8, volume 50
// Panasonic at channel 1, volume 50
