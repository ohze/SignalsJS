import { assert } from "chai";
import { GenericEvent } from "../../src/org/osflash/signals/events/GenericEvent";
import { Sprite } from "../mock/mock";

export function newEmptyHandler(): Function {
    return function(e: any = null, ...args): void {};
}

export function failIfCalled(e: any = null): void {
    assert.fail("This function should not have been called.");
}

export function checkGenericEvent(event: GenericEvent): void {
    assert.isNotOk(event.signal, "event.signal is not set by Signal");
    assert.isNotOk(event.target, "event.target is not set by Signal");
}

export function checkSprite(sprite: Sprite): void {
    assert.isTrue(sprite instanceof Sprite);
}
