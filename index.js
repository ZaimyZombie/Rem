const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const token = process.env.TOKEN

client.on("ready", () => {

	var memberCount = client.users.size;
	var serverCount = client.guilds.size;
		client.user.setGame("candy crush au bureau");
		client.user.setStatus("online");
	console.log("Je suis Online");
	console.log("Utilisateurs: " + memberCount + "\nServeurs: " + serverCount);
});
// dossier commands //
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    console.log
    files.forEach(file => {
        console.log
        let eventFunction = require(`./commands/${file}`);
        console.log
        let eventName = file.split(".")[0];
        console.log
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
        console.log
    });
});


client.on("message", (message) => {
    console.log
    if (message.author.bot) return;
    console.log
    if (message.content.indexOf(config.prefix) !==0) return;
    console.log
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // dossier commands//
    try { 
        console.log
        let commandFile = require(`./commands/${command}.js`);
        console.log
        commandFile.run(client, message, args);
        console.log

        } catch (err) {
            message.delete();
            message.channel.send("Abruti fait une commande qui existe")
            console.error(err);
            console.log
        }

    });

//bienvenue et départ//

client.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`Bienvenue à toi ${member} et installe toi. Regarde le règlement et demande ton statut dans les salons adéquates. Si tu as des questions hésitent pas à demander aux admins, aux modérateurs ou moi. :kissing_closed_eyes:`)
});

client.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`Dommage ${member} est parti, il va me manquer... Ou pas. Tu veux mon avis ? Je le trouvais moche.`)
});


client.login(token);