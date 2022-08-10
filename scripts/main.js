Events.on(ClientLoadEvent, () => {
    let p = Vars.ui.planet;
    p.shown(() => {
        if (p.mode === PlanetDialog.Mode.look) {
            p.fill(cons(t => {
                t.top().left();
                t.margin(10);
                t.defaults().size(200, 54);
                t.button("Redirect", Icon.upOpen, () => {
                    if (p.state.planet.equals(Planets.serpulo)) {
                        let s = Planets.serpulo.sectors;
                        let currSector = Vars.state.getSector();
                        Vars.state.rules.sector = s.get(15);
                        p.showSelect(currSector == null ? s.get(15) : currSector, d => {
                            s.each(e => {
                                e.info.destination = d;
                            });
                            Vars.state.rules.sector = currSector;
                        });
                        if (t.getChildren().size > 1) {
                            t.reset();
                        }
                    }
                    else {
                        if (t.getChildren().size <= 1) {
                            t.add("No launchpads here (yet)", Color.scarlet);
                        }
                    }
                });
                t.row();
            }));
        }
    });
});