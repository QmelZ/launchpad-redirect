Events.on(ClientLoadEvent, () => {
    let p = Vars.ui.planet;
    p.shown(() => {
        if(p.mode === PlanetDialog.Mode.look){
            p.fill(cons(t => {
                t.top().right();
                t.defaults().size(200, 54);
                t.button("Redirect", Icon.upOpen, () => {
                    let s = Planets.serpulo.sectors;
                    p.showSelect(s.get(15), d => {
                        s.each(e => {
                            e.info.destination = d;
                        });
                    });
                });
            }));
        }
    });
});
