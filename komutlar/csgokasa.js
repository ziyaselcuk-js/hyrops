exports.run = async (client, message, level) => {
    
    let items = [
    
      "Ak-47",
      "Karambit",
      "P90",
      "Deagle",
      "Tec-9",
      "M4A4",
      "Five-SeveN",
      "Awp",
      "M4A1-S",
      "Glock-18",
      "SSG 08",
      "P250",
      "Cz75",
      "Famas",
      "Mac-10",
      "Mag-7",
      "Mp7",
      "Mp9",
      "P2000",
      "R8 Revolver",
      "Ump-45",
      "Usp-S",
      "Γift Baretta",
      "Negev",
      "M249"
    
    ];
  
    let item = items[Math.floor(Math.random() * items.length )];

    message.channel.send(`**${message.author}** Kasa AΓ§Δ±lΔ±yor...`).then(async msg => {
        setTimeout(() => {
            msg.edit('πͺπ«π«|π«|π«π«πͺ');
        }, 1000);
        setTimeout(() => {
            msg.edit('π«π«π«|π«|π«πͺπͺ');
        }, 1500);
        setTimeout(() => {
            msg.edit('π«π«π«|π«|πͺπͺπ«');
        }, 2000);
        setTimeout(() => {
            msg.edit('π«π«π«|πͺ|πͺπ«π«');
        }, 2000);
        setTimeout(() => {
            msg.edit('π«π«πͺ|πͺ|π«π«π«');
        }, 2500);
        setTimeout(() => {
            msg.edit('π«πͺπͺ|π«|π«π«π«');
        }, 3000);
        setTimeout(() => {
            msg.edit('πͺπͺπ«|π«|π«π«π«');
        }, 3500);
        setTimeout(() => {
            msg.edit('πͺπ«π«|π«|π«π«πͺ');
        }, 4000);
       setTimeout(() => {
            msg.edit(`<:saskincat:816961394096209931> ${item} ΓΔ±ktΔ±!`).then(m =>{
            m.delete(5000)});
        }, 5000);
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kasa-aΓ§'],
    permLevel: 0
};

exports.help = {
    name: "kasa",
    description: "CS:GO kasasΔ± aΓ§ar",
    usage: "kasa"
};

//Isadora-StarKod