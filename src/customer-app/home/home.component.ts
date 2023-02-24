import { Component, Injector } from "@angular/core";
import { CUSTOM_HOME_LOGGER } from "../main/main.module";
import { BaseLogger } from "../utility/app.logger";

@Component({
    templateUrl: './home.component.html'
})


export class HomeComponent {
    logger: BaseLogger;

    constructor(_injector: Injector) {
        this.logger = _injector.get<BaseLogger>(CUSTOM_HOME_LOGGER);
        this.logger.Log();
    }
}