//command avatar //

exports.run = (client, message, args) => {
    message.delete();
    var mentionned = message.mentions.users.first();
    var autheur;
    var user = message.author.username;

    if(mentionned){
        var autheur = mentionned;
    } else {
        var autheur = message.author;
    }

    var newAvatar = autheur.avatarURL;

    if(newAvatar.includes(" .gif")){
        message.channel.send(` ${user} tu as demandé l'avatar de ` + autheur.username,)
        message.channel.send("", {
            embed:{
                image:{
                    url: autheur.avatarURL.slice(0,autheur.avatarURL.lastIndexOf('?size='))
                },
                color: 0x00FE00
            }
        })
    } else {
        message.channel.send("", {
            embed:{
                title: ` ${user} tu as demandé l'avatar de ` + autheur.username,
                image: {
                    url: autheur.avatarURL
                },
                color: 0x00FE00
            }
        })
    }
} 
