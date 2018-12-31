//commande say//

exports.run = (client, message, args) => {
    let text = args.slice(0).join(" ");
    message.delete();
    message.channel.send(text).catch(console.error);
    console.log
}
