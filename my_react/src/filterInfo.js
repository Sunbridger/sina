export const filterInfo=(oData)=>{
    let data={};
    data.names=oData.subjects.map(el=>{
        return el.title;
    })
    data.years=oData.subjects.map(el=>{
        return el.year;
    })
    data.images=oData.subjects.map(el=>{
        return el.images;
    })
    data.genres=oData.subjects.map(el=>{
        return el.genres;
    })
    data.persons=oData.subjects.map(el=>{
        return el.casts.map(ev=>{
            return ev.name
        });
    })
    console.log(data,'filterInfo 的data')
    return data;
  }