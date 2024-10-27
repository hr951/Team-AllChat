import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((ev) => {
    const { message, sender } = ev;
    const tags = [
        { name: "A", teamname: "TeamNameA" },
        { name: "B", teamname: "TeamNameB" },
        { name: "C", teamname: "TeamNameC" },
        { name: "D", teamname: "TeamNameD" }
    ];

    if (message.startsWith("!") || message.startsWith("！")) {
        ev.cancel = true;
            for (const tag of tags){
                if(sender.hasTag("A") || sender.hasTag("B") || sender.hasTag("C") || sender.hasTag("D")){
                if (!sender.hasTag(tag.name)) continue;
            const args = message.slice(1).split(" ");
                world.sendMessage(`[${tag.teamname}] §r<${sender.name}> ${args[0]}`)
            } else {
                const args = message.slice(1).split(" ");
                world.sendMessage(`[NoTag] §r<${sender.name}> ${args[0]}`)
            }
                return;
            }
    } else {
    for (const player of world.getPlayers()) {
        ev.cancel = true;
        if(sender.hasTag("A")) {
            if (player.hasTag("A")) {
                player.sendMessage(`[TEAM] §r<${sender.name}> ${message}`);
            }
             } else if(sender.hasTag("B")) {
                if (player.hasTag("B")) {
                player.sendMessage(`[TEAM] §r<${sender.name}> ${message}`);
                }
             } else if(sender.hasTag("C")) {
                if (player.hasTag("C")) {
                player.sendMessage(`[TEAM] §r<${sender.name}> ${message}`);
                }
             } else if(sender.hasTag("D")) {
                if (player.hasTag("D")) {
                player.sendMessage(`[TEAM] §r<${sender.name}> ${message}`);
                }
             } else {
                player.sendMessage(`[NoTag] §r<${sender.name}> ${message}`)
             }
    }
}
});
