let basic, pyra;
let basicFlame, pyraFlame;

basic = extend(StatusEffect, "basic", {
    color: Pal.lightFlame,
    damage: 0.12,
    effect: Fx.burning,
    init(){
        this.opposite(StatusEffects.wet, StatusEffects.freezing);
        this.trans(StatusEffects.tarred, (unit, time, newTime, result) => {
            unit.damagePierce(8);
            Fx.burning.at(unit.x + Mathf.range(unit.bounds() / 2), unit.y + Mathf.range(unit.bounds() / 2));
            result.set(burning, Math.min(time + newTime, 300));
        });
    },
    update(unit, time){
        this.super$update(unit, time);
        unit.health -= Core.graphics.getFramesPerSecond() * 4;
    }
});

pyra = extend(StatusEffect, "pyra", {
    color: Pal.lightFlame,
    damage: 0.12,
    effect: Fx.burning,
    init(){
        this.opposite(StatusEffects.wet, StatusEffects.freezing);
        this.trans(StatusEffects.tarred, (unit, time, newTime, result) => {
            unit.damagePierce(8);
            Fx.burning.at(unit.x + Mathf.range(unit.bounds() / 2), unit.y + Mathf.range(unit.bounds() / 2));
            result.set(burning, Math.min(time + newTime, 300));
        });
    },
    update(unit, time){
        this.super$update(unit, time);
        unit.health -= Core.graphics.getFramesPerSecond() * 5;
    }
});

Bullets.basicFlame.shootEffect = Fx.none;
Bullets.pyraFlame.shootEffect = Fx.none;
Bullets.basicFlame.hitEffect = Fx.none;
Bullets.pyraFlame.hitEffect = Fx.none;
Bullets.basicFlame.smokeEffect = Fx.none;
Bullets.pyraFlame.smokeEffect = Fx.none;
Bullets.basicFlame.status = basic;
Bullets.pyraFlame.status = pyra;
