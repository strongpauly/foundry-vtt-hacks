Hooks.on("init", function() {
    document.body.className = `${document.body.className} player-role-${game.user.role}`
});