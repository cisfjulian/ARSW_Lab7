var apiclient = (function(){
    return {
        getBlueprintsByAuthor: function(author, callback){
        callback(
            JSON.parse($.ajax({type: 'GET', url: 'blueprints/' + author, async: false}).responseText)
        )},

        getBlueprintsByNameAndAuthor: function(author, bpname, callback){
        var link = author + "/" + bpname;
        callback(
            JSON.parse($.ajax({type: 'GET', url: 'blueprints/' + link, async: false}).responseText)
        )},

        deleteBp:function(author,blueprintName){
                    return new Promise(function(resolve,reject){
                        resolve(
                            $.ajax({
                                url: "blueprints/"+author + "/" + blueprintName,
                                type: 'DELETE'
                            })
                        )
                    })
                },

        createBp: function(author, bpName){
            var datos = JSON.stringify({author:author,"points":[],"name":bpName});
            return new Promise(function(resolve,reject){
                resolve(
                    $.ajax({
                        url: "blueprints/",
                        type: "POST",
                        data: datos,
                        contentType: "application/json"
                    })
                )})
        }
    }
})();