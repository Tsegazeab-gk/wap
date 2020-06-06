$(function () {
    let users={};
    let  url="http://jsonplaceholder.typicode.com/";
     $("#btnRequest").click(function () {

        let user=$("#userId").val();
        $.get(url+"users/"+user).done(function (response){
            loadUsers(response);
        }).fail(function (err) {
            alert("unable to load");
        });
    });

    function loadUsers(user) {
        // let rootelement=$("#posts")
        let posts={};

        $("#posts").append( $("<h4>").addClass("username").html("User Name:"));
        $("h4.username").append($("<span>").html(user.username));

        $("#posts").append( $("<h4>").addClass("email").html("Email :"));
        $("h4.email").append($("<span>").html(user.email));

        let addelem= "<fieldset> <legend>Address</legend>";
        let add=user.address;
        addelem += "<div> <span> Street :</span> <span>"+
            add.street+"</span></div>";
        addelem += "<div> <span> Suite :</span> <span>"+
            add.suite+"</span></div>";
        addelem += "<div> <span> city :</span> <span>"+
            add.city+"</span></div>";
        addelem += "<div> <span> Zip Code: </span> <span>"+
            add.zipcode+"</span></div>";

        addelem +="</fieldset>";

        $("#posts").append(addelem);

        $.get(url+"posts", {
            "userId":user.id
        }).done(function (response) {
            posts=response;
            loadPosts(posts);

        }).fail(function (xhr,status,err) {
 alert("unable to run");
        });
    }

    function loadPosts(posts) {
        let addelem;
        for(let j=0; j < posts.length; j++) {
            addelem += "<fieldset><legend>"+ posts[j].title+"</legend>";
            addelem += "<div> "+posts[j].body+"</div>";
            addelem += "<button class='comment' id='"+
                posts[j].id+"' >show comments </button>";
            addelem += "</fieldset>";
        }

        $("#postBody").append(addelem);
        attachEvents();
    }

    function attachEvents() {
        $("button").click(function () {
            let id=$(this).attr("id");

            $.get(url+"comments", {
                "postId":id
            }).done(function (response) {

                let addelem= "<div>";
                let comments=response
                for(let i=0;i< comments.length;i++){
                    addelem += "<fieldset > <legend>"+
                        comments[i].name+" email: "+
                        comments[i].email+"</legend>";
                    addelem += "<div> "+comments[i].body+"</div>";
                    addelem += "</fieldset>";
                }
                addelem +="</div>";

                $("#"+id).parent() .append(addelem);

            }).fail(function (xhr,status,err) {

            });
        });

    }

});


