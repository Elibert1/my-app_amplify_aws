let slideshow = {
    currentPhotoIndex: 0,
    photolist: ['name1', 'name2', 'name3'],
    nextPhoto: function(){
        // let self= this,      Closure Hack
        //console.log('Next Photo called$[this.currentPhotoIndex]');
        //console.log(self.photoList.length);
        
        if(this.currentPhotoIndex < this.photolist.length){
            let photo= this.getCurrentPhoto();
            this.currentPhotoIndex= this.currentPhotoIndex + 1;

            //console.log(this.photoList[this.currentPhotoIndex]);
        }
        else {
           this.currentPhotoIndex=0;
           this.pause();
           return "End of the slideshow";
            // console.log("End of slideshow");
        }
    },
    prevPhoto: function(){
      //let self= this;       Closure Hack
        
        if(this.currentPhotoIndex > 0){
            this.currentPhotoIndex= this.currentPhotoIndex - 1;
            return this.getCurrentPhoto();
            // console.log(this.photoList[this.currentPhotoIndex]);
        }
        else {
            return "Beginning of the Slideshow";
            // console.log("End of slideshow");
        }
        // return self.getCurrentPhoto();
    },
    getCurrentPhoto: function(){
       //console.log('current photo is ${this.currentPhotoIndex}');
        return `The current photo is ${this.currentPhotoIndex} ${this.photoList[this.currentPhotoIndex]}`;
    },
    
    playInterval: null,

    play: function() {
       // let self = this;
        let boundFunction = function(){
            //console.log("calling next photo from play");
            console.log(this.nextPhoto());
        }.bind(this);
            this.playInterval = setInterval(boundFunction, 2000)
           return this.playInterval._idleTimeout;
},

    pause: function() {
        clearInterval(this.playInterval);
    }
}

console.log(slideshow.getCurrentPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.prevPhoto());
console.log(slideshow.prevPhoto());
console.log(slideshow.prevPhoto());

console.log(slideshow.play());