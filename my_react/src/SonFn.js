import $ from 'jquery';
export const SonFn=()=> {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "POST",
        url:"https://api.douban.com/v2/movie/in_theaters",
        data:{son:'saasdadasdasas'},
        dataType:'jsonp',
        timeout:3000,
        success:resolve,
        error:reject
      });
    });
  }