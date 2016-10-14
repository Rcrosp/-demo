// function getActors(actorArr){
//     var str = '';
//     for(var i =0;i<actorArr.length;i++){
//         var actor = actorArr[i];
//         str = str+ "/" + actor.name;
//     }
//     // return str;
// }
function processSubject(subject){
  var title = subject.title;
  var director = subject.directors[0].name;
  var movietype = this.getMovieType(subject.genres);
  var actors =  this.getActors(subject.casts);
  var year = subject.year;
//   var language = subject.broadcast[0].language;
  var str = "名称:"+ title+"\n导演:"+ director+"\n演员:"+ actors+"\n类型:"+ movietype+"\n年份:"+ year;

  subject.movieName = str;
}

function getMovieType(genres){
     var str = '';
    for(var i =0;i<genres.length;i++){
        var genre = genres[i];
        if(i == 0){
            str = str + genre;
        }else{
            str = str+ "/" + genre;
        }
       
    }
     return str;
}

function getActors(actors){
    var str = '';
    for(var i =0;i<actors.length;i++){
        var actor = actors[i];
        if(i == 0){
            str = str+ actor.name;
        }else{
            str = str+ "/" + actor.name;
        }
    }
     return str;
}


function processSubjects(subjects){
    for(var i =0;i<subjects.length;i++){
        var subject = subjects[i];
        this.processSubject(subject);
        
    }
}
module.exports = {

    getMovieType:getMovieType,
    getActors:getActors,
    processSubject:processSubject,
    processSubjects:processSubjects
}