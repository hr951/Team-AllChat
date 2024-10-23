import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((ev) => {
    const { message, sender } = ev;

    if (message.startsWith("!")) {
        ev.cancel = true;

            const args = message.slice(1).split(" ");
                world.sendMessage(`[ALL] §r<${sender.name}> ${args[0]}`)
                return;
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
