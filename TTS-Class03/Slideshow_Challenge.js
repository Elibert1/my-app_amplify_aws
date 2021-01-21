let slideshow = {
    self: this,
    photolist: ['name1', 'name2', 'name3'],
    currentPhotoIndex: 0,
    nextPhoto: function(){
        if(this.currentPhotoIndex <= this.photolist.length){
            this.currentPhotoIndex += 1;
            //console.log(this.photoList[this.currentPhotoIndex]);
            //
            self.getCurrentPhoto();
        }
        else {
           // console.log("End of slideshow");
        }
    },
    prevPhoto: function(){
        if(this.currentPhotoIndex > 0){
            this.currentPhotoIndex -= 1;
            // console.log(this.photoList[this.currentPhotoIndex]);
        }
        else {
            // console.log("End of slideshow");
        }
    },
    getCurrentPhoto: function(){
        return this.photoList[this.currentPhotoIndex];
     console.log(slideshow.getCurrentPhoto());
     console.log(slideshow.nextPhoto());
    } 
}
