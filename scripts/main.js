const ui = require("ui-lib/library");


ui.addMenuButton("Select Launchpad Destination", "upOpen", () => {
    Vars.ui.planet.showSelect(
        Vars.content.getByName(ContentType.planet, "serpulo").sectors.get(15),
        dest => {
            Vars.content.getByName(ContentType.planet, "serpulo").sectors.each(sector => {
                sector.info.destination = dest;
            });
        }
    );
});


/*
Vars.ui.planet.showSelect(
    Vars.content.getByName(ContentType.planet, "serpulo").sectors.get(15),
    dest => {
        Vars.content.getByName(ContentType.planet, "serpulo").sectors.each(sector => {
            sector.info.destination = dest;
        });
    }
);
*/
