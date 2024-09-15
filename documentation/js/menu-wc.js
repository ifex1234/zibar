'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">zibar documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-ab5f8fa396b84c3cdd0ced5fd78557df02da85a20a26fd6d67539b45390d432ceff776407a19eeb19a0166b5c65e72853abac5837b45c8d3b22389a3a1ac218d"' : 'data-bs-target="#xs-controllers-links-module-AppModule-ab5f8fa396b84c3cdd0ced5fd78557df02da85a20a26fd6d67539b45390d432ceff776407a19eeb19a0166b5c65e72853abac5837b45c8d3b22389a3a1ac218d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ab5f8fa396b84c3cdd0ced5fd78557df02da85a20a26fd6d67539b45390d432ceff776407a19eeb19a0166b5c65e72853abac5837b45c8d3b22389a3a1ac218d"' :
                                            'id="xs-controllers-links-module-AppModule-ab5f8fa396b84c3cdd0ced5fd78557df02da85a20a26fd6d67539b45390d432ceff776407a19eeb19a0166b5c65e72853abac5837b45c8d3b22389a3a1ac218d"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/LoginController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/VehicleLicenceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VehicleLicenceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-ab5f8fa396b84c3cdd0ced5fd78557df02da85a20a26fd6d67539b45390d432ceff776407a19eeb19a0166b5c65e72853abac5837b45c8d3b22389a3a1ac218d"' : 'data-bs-target="#xs-injectables-links-module-AppModule-ab5f8fa396b84c3cdd0ced5fd78557df02da85a20a26fd6d67539b45390d432ceff776407a19eeb19a0166b5c65e72853abac5837b45c8d3b22389a3a1ac218d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ab5f8fa396b84c3cdd0ced5fd78557df02da85a20a26fd6d67539b45390d432ceff776407a19eeb19a0166b5c65e72853abac5837b45c8d3b22389a3a1ac218d"' :
                                        'id="xs-injectables-links-module-AppModule-ab5f8fa396b84c3cdd0ced5fd78557df02da85a20a26fd6d67539b45390d432ceff776407a19eeb19a0166b5c65e72853abac5837b45c8d3b22389a3a1ac218d"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VehicleLicenceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VehicleLicenceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-9e241d50ae45a590a104c6297c6b21389c41cc6daf4d7ff8cc92675f22e3f9e99aa9fabb1d4937c79cd2fb00c9557b5f8719506f5b5f4a77041e6fc6c3cea3b1"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-9e241d50ae45a590a104c6297c6b21389c41cc6daf4d7ff8cc92675f22e3f9e99aa9fabb1d4937c79cd2fb00c9557b5f8719506f5b5f4a77041e6fc6c3cea3b1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-9e241d50ae45a590a104c6297c6b21389c41cc6daf4d7ff8cc92675f22e3f9e99aa9fabb1d4937c79cd2fb00c9557b5f8719506f5b5f4a77041e6fc6c3cea3b1"' :
                                            'id="xs-controllers-links-module-AuthModule-9e241d50ae45a590a104c6297c6b21389c41cc6daf4d7ff8cc92675f22e3f9e99aa9fabb1d4937c79cd2fb00c9557b5f8719506f5b5f4a77041e6fc6c3cea3b1"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-9e241d50ae45a590a104c6297c6b21389c41cc6daf4d7ff8cc92675f22e3f9e99aa9fabb1d4937c79cd2fb00c9557b5f8719506f5b5f4a77041e6fc6c3cea3b1"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-9e241d50ae45a590a104c6297c6b21389c41cc6daf4d7ff8cc92675f22e3f9e99aa9fabb1d4937c79cd2fb00c9557b5f8719506f5b5f4a77041e6fc6c3cea3b1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-9e241d50ae45a590a104c6297c6b21389c41cc6daf4d7ff8cc92675f22e3f9e99aa9fabb1d4937c79cd2fb00c9557b5f8719506f5b5f4a77041e6fc6c3cea3b1"' :
                                        'id="xs-injectables-links-module-AuthModule-9e241d50ae45a590a104c6297c6b21389c41cc6daf4d7ff8cc92675f22e3f9e99aa9fabb1d4937c79cd2fb00c9557b5f8719506f5b5f4a77041e6fc6c3cea3b1"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LoginModule-206756556a222f85b59ec76ca924fbcdf109b8b02817bcc8c5e5e8fa978c4566b9f84f191244b7696e9734a84180c64d24091b5ba5375f60e4a830de35c0f9ef"' : 'data-bs-target="#xs-controllers-links-module-LoginModule-206756556a222f85b59ec76ca924fbcdf109b8b02817bcc8c5e5e8fa978c4566b9f84f191244b7696e9734a84180c64d24091b5ba5375f60e4a830de35c0f9ef"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LoginModule-206756556a222f85b59ec76ca924fbcdf109b8b02817bcc8c5e5e8fa978c4566b9f84f191244b7696e9734a84180c64d24091b5ba5375f60e4a830de35c0f9ef"' :
                                            'id="xs-controllers-links-module-LoginModule-206756556a222f85b59ec76ca924fbcdf109b8b02817bcc8c5e5e8fa978c4566b9f84f191244b7696e9734a84180c64d24091b5ba5375f60e4a830de35c0f9ef"' }>
                                            <li class="link">
                                                <a href="controllers/LoginController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LoginModule-206756556a222f85b59ec76ca924fbcdf109b8b02817bcc8c5e5e8fa978c4566b9f84f191244b7696e9734a84180c64d24091b5ba5375f60e4a830de35c0f9ef"' : 'data-bs-target="#xs-injectables-links-module-LoginModule-206756556a222f85b59ec76ca924fbcdf109b8b02817bcc8c5e5e8fa978c4566b9f84f191244b7696e9734a84180c64d24091b5ba5375f60e4a830de35c0f9ef"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoginModule-206756556a222f85b59ec76ca924fbcdf109b8b02817bcc8c5e5e8fa978c4566b9f84f191244b7696e9734a84180c64d24091b5ba5375f60e4a830de35c0f9ef"' :
                                        'id="xs-injectables-links-module-LoginModule-206756556a222f85b59ec76ca924fbcdf109b8b02817bcc8c5e5e8fa978c4566b9f84f191244b7696e9734a84180c64d24091b5ba5375f60e4a830de35c0f9ef"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoadWorthinessModule.html" data-type="entity-link" >RoadWorthinessModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RoadWorthinessModule-783c6542f74f05be76fa722b0911be6da871925bcf3050d8a7f73a974e502d20e41d96d8688c34f9b4b728d2ab27756f9cc014cbe3a9526fe9401f6908b6efc6"' : 'data-bs-target="#xs-controllers-links-module-RoadWorthinessModule-783c6542f74f05be76fa722b0911be6da871925bcf3050d8a7f73a974e502d20e41d96d8688c34f9b4b728d2ab27756f9cc014cbe3a9526fe9401f6908b6efc6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RoadWorthinessModule-783c6542f74f05be76fa722b0911be6da871925bcf3050d8a7f73a974e502d20e41d96d8688c34f9b4b728d2ab27756f9cc014cbe3a9526fe9401f6908b6efc6"' :
                                            'id="xs-controllers-links-module-RoadWorthinessModule-783c6542f74f05be76fa722b0911be6da871925bcf3050d8a7f73a974e502d20e41d96d8688c34f9b4b728d2ab27756f9cc014cbe3a9526fe9401f6908b6efc6"' }>
                                            <li class="link">
                                                <a href="controllers/RoadWorthinessController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoadWorthinessController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RoadWorthinessModule-783c6542f74f05be76fa722b0911be6da871925bcf3050d8a7f73a974e502d20e41d96d8688c34f9b4b728d2ab27756f9cc014cbe3a9526fe9401f6908b6efc6"' : 'data-bs-target="#xs-injectables-links-module-RoadWorthinessModule-783c6542f74f05be76fa722b0911be6da871925bcf3050d8a7f73a974e502d20e41d96d8688c34f9b4b728d2ab27756f9cc014cbe3a9526fe9401f6908b6efc6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoadWorthinessModule-783c6542f74f05be76fa722b0911be6da871925bcf3050d8a7f73a974e502d20e41d96d8688c34f9b4b728d2ab27756f9cc014cbe3a9526fe9401f6908b6efc6"' :
                                        'id="xs-injectables-links-module-RoadWorthinessModule-783c6542f74f05be76fa722b0911be6da871925bcf3050d8a7f73a974e502d20e41d96d8688c34f9b4b728d2ab27756f9cc014cbe3a9526fe9401f6908b6efc6"' }>
                                        <li class="link">
                                            <a href="injectables/RoadWorthinessService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoadWorthinessService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-41ef1a8a679c07edbad77407e24f30d6b67eb5aff23e097e412131a1f8ba7df302889dc21ee583175e020d5cc966c56407539e8a813210b732a2dfcaa0a15a1f"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-41ef1a8a679c07edbad77407e24f30d6b67eb5aff23e097e412131a1f8ba7df302889dc21ee583175e020d5cc966c56407539e8a813210b732a2dfcaa0a15a1f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-41ef1a8a679c07edbad77407e24f30d6b67eb5aff23e097e412131a1f8ba7df302889dc21ee583175e020d5cc966c56407539e8a813210b732a2dfcaa0a15a1f"' :
                                            'id="xs-controllers-links-module-UsersModule-41ef1a8a679c07edbad77407e24f30d6b67eb5aff23e097e412131a1f8ba7df302889dc21ee583175e020d5cc966c56407539e8a813210b732a2dfcaa0a15a1f"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-41ef1a8a679c07edbad77407e24f30d6b67eb5aff23e097e412131a1f8ba7df302889dc21ee583175e020d5cc966c56407539e8a813210b732a2dfcaa0a15a1f"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-41ef1a8a679c07edbad77407e24f30d6b67eb5aff23e097e412131a1f8ba7df302889dc21ee583175e020d5cc966c56407539e8a813210b732a2dfcaa0a15a1f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-41ef1a8a679c07edbad77407e24f30d6b67eb5aff23e097e412131a1f8ba7df302889dc21ee583175e020d5cc966c56407539e8a813210b732a2dfcaa0a15a1f"' :
                                        'id="xs-injectables-links-module-UsersModule-41ef1a8a679c07edbad77407e24f30d6b67eb5aff23e097e412131a1f8ba7df302889dc21ee583175e020d5cc966c56407539e8a813210b732a2dfcaa0a15a1f"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VehicleLicenceModule.html" data-type="entity-link" >VehicleLicenceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-VehicleLicenceModule-8892781824b10e34b952d74aff0b60727ec68614cfa02da5d771e94859f083e6c90a55c00f892c12a5b6d8ae2a1879bbb7abc2714949dbdf1cf041c60b330eb9"' : 'data-bs-target="#xs-controllers-links-module-VehicleLicenceModule-8892781824b10e34b952d74aff0b60727ec68614cfa02da5d771e94859f083e6c90a55c00f892c12a5b6d8ae2a1879bbb7abc2714949dbdf1cf041c60b330eb9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VehicleLicenceModule-8892781824b10e34b952d74aff0b60727ec68614cfa02da5d771e94859f083e6c90a55c00f892c12a5b6d8ae2a1879bbb7abc2714949dbdf1cf041c60b330eb9"' :
                                            'id="xs-controllers-links-module-VehicleLicenceModule-8892781824b10e34b952d74aff0b60727ec68614cfa02da5d771e94859f083e6c90a55c00f892c12a5b6d8ae2a1879bbb7abc2714949dbdf1cf041c60b330eb9"' }>
                                            <li class="link">
                                                <a href="controllers/VehicleLicenceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VehicleLicenceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-VehicleLicenceModule-8892781824b10e34b952d74aff0b60727ec68614cfa02da5d771e94859f083e6c90a55c00f892c12a5b6d8ae2a1879bbb7abc2714949dbdf1cf041c60b330eb9"' : 'data-bs-target="#xs-injectables-links-module-VehicleLicenceModule-8892781824b10e34b952d74aff0b60727ec68614cfa02da5d771e94859f083e6c90a55c00f892c12a5b6d8ae2a1879bbb7abc2714949dbdf1cf041c60b330eb9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VehicleLicenceModule-8892781824b10e34b952d74aff0b60727ec68614cfa02da5d771e94859f083e6c90a55c00f892c12a5b6d8ae2a1879bbb7abc2714949dbdf1cf041c60b330eb9"' :
                                        'id="xs-injectables-links-module-VehicleLicenceModule-8892781824b10e34b952d74aff0b60727ec68614cfa02da5d771e94859f083e6c90a55c00f892c12a5b6d8ae2a1879bbb7abc2714949dbdf1cf041c60b330eb9"' }>
                                        <li class="link">
                                            <a href="injectables/VehicleLicenceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VehicleLicenceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LoginController.html" data-type="entity-link" >LoginController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RoadWorthinessController.html" data-type="entity-link" >RoadWorthinessController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VehicleLicenceController.html" data-type="entity-link" >VehicleLicenceController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthEntity.html" data-type="entity-link" >AuthEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLoginDto.html" data-type="entity-link" >CreateLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoadWorthinessDto.html" data-type="entity-link" >CreateRoadWorthinessDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateVehicleLicenceDto.html" data-type="entity-link" >CreateVehicleLicenceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginEntity.html" data-type="entity-link" >LoginEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoadWorthiness.html" data-type="entity-link" >RoadWorthiness</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLoginDto.html" data-type="entity-link" >UpdateLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoadWorthinessDto.html" data-type="entity-link" >UpdateRoadWorthinessDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateVehicleLicenceDto.html" data-type="entity-link" >UpdateVehicleLicenceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEntity.html" data-type="entity-link" >UserEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/VehicleLicence.html" data-type="entity-link" >VehicleLicence</a>
                            </li>
                            <li class="link">
                                <a href="classes/VehicleLicenceEntity.html" data-type="entity-link" >VehicleLicenceEntity</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoadWorthinessService.html" data-type="entity-link" >RoadWorthinessService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VehicleLicenceService.html" data-type="entity-link" >VehicleLicenceService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ILogin.html" data-type="entity-link" >ILogin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVehicleLicence.html" data-type="entity-link" >IVehicleLicence</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});