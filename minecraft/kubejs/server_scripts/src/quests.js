//priority: 9
const SIDE_DISH_COOLDOWN = 3600; // Seconds
const SIDE_DISH_CHAPTERS = [12,14,16,18,20];

PlayerEvents.tick(event => {
    if (event.server.tickCount % 20 == 0) {
        // Only check once per second
        const data = FTBQuests.getServerDataFromPlayer(event.player);
    
        for (let chapter of SIDE_DISH_CHAPTERS) {
            for (let quest of FTBQuests.getFile(event.level).getAllChapters()[chapter].getQuests()) {
                if (data.isCompleted(quest)) {
                    let cooldown = event.player.data.getOrDefault(quest, 0) + 1;
                    if (cooldown > SIDE_DISH_COOLDOWN) {
                        event.server.runCommandSilent("/ftbquests change_progress @p reset "+quest);
                        event.player.data.put(quest, 0);
                        event.player.tell("Side Dish "+quest.rawTitle+" can be repeated.");
                    } else {
                        event.player.data.put(quest, cooldown);
                    }
                }
            }
        }
    }
});