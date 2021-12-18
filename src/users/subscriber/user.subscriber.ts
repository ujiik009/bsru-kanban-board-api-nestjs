import { EventSubscriber, EntitySubscriberInterface, InsertEvent, UpdateEvent } from "typeorm"
import { User } from '../entities/user.entity';
const md5 = require("crypto-js/md5");
@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface {

    /**
    * Indicates that this subscriber only listen to Post events.
    */
    listenTo() {
        return User;
    }

    /**
    * Called before User insertion.
    */
    beforeInsert(event: InsertEvent<User>) {
        event.entity.password = md5(md5(event.entity.password).toString()).toString()
    }


}