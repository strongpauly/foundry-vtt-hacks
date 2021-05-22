Hooks.on('renderSidebarTab', function(){
    const playerRoleClass = `player-role-${game.user.role}`
    const sideBar = document.getElementById('sidebar');
    if(sideBar && sideBar.className.indexOf(playerRoleClass) === -1) {
        sideBar.className = `${sideBar.className} ${playerRoleClass}`;
    }

});

