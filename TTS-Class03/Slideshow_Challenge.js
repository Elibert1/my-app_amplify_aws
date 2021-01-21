let slideshow = {
    photolist: ['name1', 'name2'],
    currentPhotoIndex: 2,
    nextPhoto: function(){
        if(this.currentPhotoIndex){
            this.currentPhotoIndex += 1;
            console.log(this.photoList[this.currentPhotoIndex]);
        }
        else {
            console.log("End of slideshow");
        }
    },
    prevPhoto: function(){
        if(this.currentPhotoIndex){
            this.currentPhotoIndex -= 1;
            console.log(this.photoList[this.currentPhotoIndex]);
        }
        else {
            console.log("End of slideshow");
        }
    },
    getCurrentPhoto: function(){
        return this.currentPhotoIndex;
    } 
}