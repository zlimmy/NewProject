require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ActionCallback":[function(require,module,exports){
cc._RFpush(module, '2881e6K1edLBbgvc+6/YN7o', 'ActionCallback');
// cases\05_scripting\03_events\ActionCallback.js

'use strict';

cc.Class({
    'extends': cc.Component,

    // use this for initialization
    onLoad: function onLoad() {
        var touchEvent = this.getComponent('TouchEvent');
        var mouseEvent = this.getComponent('MouseEvent');
        var event = touchEvent || mouseEvent;
        event._callback = function () {
            this.node.runAction(cc.sequence(cc.scaleTo(0.5, 2, 1), cc.scaleTo(0.25, 1, 1)));
        };
    }
});

cc._RFpop();
},{}],"AudioControl":[function(require,module,exports){
cc._RFpush(module, '8c95bT2M3hBPIdRDVftiUQG', 'AudioControl');
// cases\04_audio\AudioControl.js

"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        musicPlayer: {
            "default": null,
            type: cc.AudioSource
        },
        dingClip: {
            "default": null,
            url: cc.AudioClip
        },
        cheeringClip: {
            "default": null,
            url: cc.AudioClip
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        // play audioSource
        self.musicPlayer.play();

        // play ding in 1 sec, play cheering in 2 sec
        setTimeout(function () {
            cc.audioEngine.playEffect(self.dingClip, false);
            setTimeout(function () {
                cc.audioEngine.playEffect(self.cheeringClip, false);
            }, 2000);
        }, 1000);
    },

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();
},{}],"ButtonControl1":[function(require,module,exports){
cc._RFpush(module, 'e6dc7dWcxxJuofXB7ergGnC', 'ButtonControl1');
// cases\02_ui\03_button\ButtonControl1.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        buttonLeft: {
            'default': null,
            type: cc.Button
        },
        buttonRight: {
            'default': null,
            type: cc.Button
        },
        display: {
            'default': null,
            type: cc.Label
        },

        buttonAnim: {
            'default': null,
            type: cc.Animation
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        // You can also register event listener using the method below
        // this.buttonLeft.getComponent(cc.Button).on(cc.EButton.EVENT_TOUCH_UP, this.onBtnLeftClicked, this);
        // this.buttonRight.getComponent(cc.Button).on(cc.EButton.EVENT_TOUCH_UP, this.onBtnRightClicked, this);
    },

    onBtnLeftClicked: function onBtnLeftClicked() {
        console.log('Left button clicked!');
        this.display.string = 'Left button clicked!';
        this.display.string = 'hehe';
        var anim = this.buttonAnim;
        anim.play('button_move');
    },

    onBtnRightClicked: function onBtnRightClicked() {
        console.log('Right button clicked!');
        this.display.string = 'Right button clicked!';
    },

    onBtnInScrollClicked: function onBtnInScrollClicked() {
        console.log('Button in Scrollview clicked!');
        this.display.string = 'Button in ScrollView clicked!';
    }
});

cc._RFpop();
},{}],"CustomEvent":[function(require,module,exports){
cc._RFpush(module, '5cc23aoYcxIKazRFwKWGEI7', 'CustomEvent');
// cases\05_scripting\03_events\CustomEvent.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        var touchEvent = this.getComponent('TouchEvent');

        // Emit CUSTOM_EVENT to its listeners while touch end
        touchEvent._callback = (function () {
            this.node.emit('CUSTOM_EVENT');
        }).bind(this);

        var addButton = cc.find('Canvas/add');
        var cancelButton = cc.find('Canvas/cancel');

        function onCustomEvent(event) {
            this.runAction(cc.sequence(cc.scaleTo(0.5, 2, 1), cc.scaleTo(0.25, 1, 1)));
        }

        this.node.on('CUSTOM_EVENT', onCustomEvent, addButton);
        this.node.on('CUSTOM_EVENT', onCustomEvent, cancelButton);
    }
});

cc._RFpop();
},{}],"Helpers":[function(require,module,exports){
cc._RFpush(module, 'c8640M3ozRErrV/Go3uTknt', 'Helpers');
// scripts\Global\Helpers.js

// Returns a random integer between min (included) and max (excluded)
"use strict";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
  getRandomInt: getRandomInt
};

cc._RFpop();
},{}],"Instruction":[function(require,module,exports){
cc._RFpush(module, '6a871gy73FDLap3Eje/2h6i', 'Instruction');
// scripts\Global\Instruction.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        text: {
            'default': '',
            type: String,
            multiline: true
        }
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();
},{}],"Item":[function(require,module,exports){
cc._RFpush(module, '920c8a5MahAhbCTSvmQvaB+', 'Item');
// cases\02_ui\05_scrollView\Item.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        label: {
            'default': null,
            type: cc.Label
        },
        itemID: 0
    },

    updateItem: function updateItem(tmplId, itemId) {
        this.itemID = itemId;
        this.label.string = 'Tmpl#' + tmplId + ' Item#' + this.itemID;
    }
});

cc._RFpop();
},{}],"ListItem":[function(require,module,exports){
cc._RFpush(module, 'aa63bWNE8hBf4P4Sp0X2uT0', 'ListItem');
// scripts\Global\ListItem.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        label: {
            'default': null,
            type: cc.Label
        },
        url: ''
    },

    loadExample: function loadExample() {
        if (this.url) {
            cc.find('Menu').getComponent('Menu').loadScene(this.url);
        }
    }
});

cc._RFpop();
},{}],"ListView":[function(require,module,exports){
cc._RFpush(module, 'e6458+hf5VAnIXocmvhggqC', 'ListView');
// cases\02_ui\05_scrollView\ListView.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        itemTemplate: { // item template to instantiate other items
            'default': null,
            type: cc.Node
        },
        scrollView: {
            'default': null,
            type: cc.ScrollView
        },
        spawnCount: 0, // how many items we actually spawn
        totalCount: 0, // how many items we need for the whole list
        spacing: 0, // space between each item
        bufferZone: 0 },

    // when item is away from bufferZone, we relocate it
    // use this for initialization
    onLoad: function onLoad() {
        this.content = this.scrollView.content;
        this.items = []; // array to store spawned items
        this.initialize();
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosY = 0; // use this variable to detect if we are scrolling up or down
    },

    initialize: function initialize() {
        this.content.height = this.totalCount * (this.itemTemplate.height + this.spacing) + this.spacing; // get total content height
        for (var i = 0; i < this.spawnCount; ++i) {
            // spawn items, we only need to do this once
            var item = cc.instantiate(this.itemTemplate);
            this.content.addChild(item);
            item.setPosition(0, -item.height * (0.5 + i) - this.spacing * (i + 1));
            item.getComponent('Item').updateItem(i, i);
            this.items.push(item);
        }
    },

    getPositionInView: function getPositionInView(item) {
        // get item position in scrollview's node space
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    },

    update: function update(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return; // we don't need to do the math every frame
        this.updateTimer = 0;
        var items = this.items;
        var buffer = this.bufferZone;
        var isDown = this.scrollView.content.y < this.lastContentPosY; // scrolling direction
        var offset = (this.itemTemplate.height + this.spacing) * items.length;
        for (var i = 0; i < items.length; ++i) {
            var viewPos = this.getPositionInView(items[i]);
            if (isDown) {
                // if away from buffer zone and not reaching top of content
                if (viewPos.y < -buffer && items[i].y + offset < 0) {
                    items[i].setPositionY(items[i].y + offset);
                    var item = items[i].getComponent('Item');
                    var itemId = item.itemID - items.length; // update item id
                    item.updateItem(i, itemId);
                }
            } else {
                // if away from buffer zone and not reaching bottom of content
                if (viewPos.y > buffer && items[i].y - offset > -this.content.height) {
                    items[i].setPositionY(items[i].y - offset);
                    var item = items[i].getComponent('Item');
                    console.log('itemID: ' + item.itemID);
                    var itemId = item.itemID + items.length;
                    item.updateItem(i, itemId);
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosY = this.scrollView.content.y;
    }
});

cc._RFpop();
},{}],"Menu":[function(require,module,exports){
cc._RFpush(module, '04525pyYBlN26SWawaUF3dA', 'Menu');
// scripts\Global\Menu.js

'use strict';

var emptyFunc = function emptyFunc(event) {
    event.stopPropagation();
};

cc.Class({
    'extends': cc.Component,

    properties: {
        text: {
            'default': null,
            type: cc.Label
        },
        readme: {
            'default': null,
            type: cc.Node
        },
        mask: {
            'default': null,
            type: cc.Node
        },
        btnInfo: {
            'default': null,
            type: cc.Button
        },
        btnBack: {
            'default': null,
            type: cc.Button
        }
    },

    onLoad: function onLoad() {
        cc.game.addPersistRootNode(this.node);
        this.currentSceneUrl = 'TestList.fire';
        this.loadInstruction(this.currentSceneUrl);
    },

    backToList: function backToList() {
        this.showReadme(false);
        this.currentSceneUrl = 'TestList.fire';
        cc.director.loadScene('TestList', this.onLoadSceneFinish.bind(this));
    },

    loadScene: function loadScene(url) {
        this.currentSceneUrl = url;
        cc.director.loadScene(url, this.onLoadSceneFinish.bind(this));
    },

    onLoadSceneFinish: function onLoadSceneFinish() {
        var url = this.currentSceneUrl;
        this.loadInstruction(url);
    },

    loadInstruction: function loadInstruction(url) {
        var self = this;
        var mdUrl = url.replace(/\.fire$/, '.md').replace('db://assets/', '');
        cc.loader.loadTxt(cc.url.raw(mdUrl), function (err, txt) {
            if (err) {
                self.text.string = '说明暂缺';
                return;
            }
            self.text.string = txt;
        });
    },

    showReadme: function showReadme(active) {
        if (active === undefined) {
            this.readme.active = !this.readme.active;
        } else {
            this.readme.active = active;
        }
        if (this.readme.active) {
            this.mask.on('touchstart', emptyFunc, this);
        } else {
            this.mask.off('touchstart', emptyFunc, this);
        }
        var labelTxt = this.readme.active ? '关闭说明' : '查看说明';
        cc.find('label', this.btnInfo.node).getComponent(cc.Label).string = labelTxt;
    }
});

cc._RFpop();
},{}],"MonsterPrefab":[function(require,module,exports){
cc._RFpush(module, '8cb4dm2QEpJ7pnaS/cjrvgF', 'MonsterPrefab');
// cases\05_scripting\02_prefab\MonsterPrefab.js

'use strict';

var Helpers = require('Helpers');

cc.Class({
    'extends': cc.Component,

    properties: {
        spriteList: {
            'default': [],
            type: [cc.SpriteFrame]
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var randomIdx = Helpers.getRandomInt(0, this.spriteList.length);
        var sprite = this.getComponent(cc.Sprite);
        sprite.spriteFrame = this.spriteList[randomIdx];
    }

});

cc._RFpop();
},{"Helpers":"Helpers"}],"MouseEvent":[function(require,module,exports){
cc._RFpush(module, '6df0ft1jy5Jg4cQ039jt8jC', 'MouseEvent');
// cases\05_scripting\03_events\MouseEvent.js

"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.scroll = 0;
        this.node.opacity = 50;
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            this.node.opacity = 255;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_ENTER, function () {
            this.node.opacity = 160;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function () {
            this.node.opacity = 50;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, function () {
            this.node.opacity = 50;
            if (this._callback) {
                this._callback();
            }
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_WHEEL, function (event) {
            this.scroll += event.getScrollY();
            var h = this.node.height;
            this.scroll = cc.clampf(this.scroll, -2 * h, 0.7 * h);
            this.node.scale = 1 - this.scroll / h;
        }, this);
    }
});

cc._RFpop();
},{}],"MyCustomComponent":[function(require,module,exports){
cc._RFpush(module, '6b8baEpLuxACIMNlIL2vw2W', 'MyCustomComponent');
// cases\05_scripting\01_properties\MyCustomComponent.js

"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        power: 10
    },

    getPower: function getPower() {
        return this.power;
    }
});

cc._RFpop();
},{}],"NodeGroupControl":[function(require,module,exports){
cc._RFpush(module, 'bd4a2+britAlof0UdMCVB8c', 'NodeGroupControl');
// cases\05_scripting\01_properties\NodeGroupControl.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        nodeList: {
            'default': [],
            type: [cc.Node]
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        this.inervalId = setInterval(function () {
            self.toggleNodesVisibility();
        }, 1000);
    },

    onDestroy: function onDestroy() {
        clearInterval(this.inervalId);
    },

    toggleNodesVisibility: function toggleNodesVisibility() {
        console.log('toggle visibility');
        for (var i = 0; i < this.nodeList.length; ++i) {
            this.nodeList[i].active = !this.nodeList[i].active;
        }
    }
});

cc._RFpop();
},{}],"NonSerializedProperties":[function(require,module,exports){
cc._RFpush(module, 'd4114PgybhJ3L/k0N9TkCZI', 'NonSerializedProperties');
// cases\05_scripting\01_properties\NonSerializedProperties.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        mySerializedText: '',
        myNonSerializedText: {
            'default': '',
            visible: false
        },
        label1: {
            'default': null,
            type: cc.Label
        },
        label2: {
            'default': null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.myNonSerializedText = 'Can only set value in script';
        this.label1.string = this.mySerializedText;
        this.label2.string = this.myNonSerializedText;
    }
});

cc._RFpop();
},{}],"ParticleControl1":[function(require,module,exports){
cc._RFpush(module, '79ae3hiP+JAhIKehaWyiKuh', 'ParticleControl1');
// cases\01_graphics\02_particle\ParticleControl1.js

"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        particle: {
            "default": null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        // use space to toggle particle
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function onKeyPressed(keyCode, event) {
                if (keyCode === cc.KEY.space) {
                    self.toggleParticlePlay();
                }
            }
        }, self);
    },

    toggleParticlePlay: function toggleParticlePlay() {
        var myParticle = this.particle.getComponent(cc.ParticleSystem);
        if (myParticle.isFull()) {
            // check if particle has fully plaed
            myParticle.stopSystem(); // stop particle system
        } else {
                myParticle.resetSystem(); // restart particle system
            }
    }
});

cc._RFpop();
},{}],"PopulatePrefab":[function(require,module,exports){
cc._RFpush(module, '75518I0ImJHXqWNNGRIOmJg', 'PopulatePrefab');
// cases\05_scripting\02_prefab\PopulatePrefab.js

"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        prefab: {
            "default": null,
            type: cc.Prefab
        },
        canvas: {
            "default": null,
            type: cc.Canvas
        },
        numberToSpawn: 0,
        spawnInterval: 0
    },

    addSpawn: function addSpawn() {
        if (this.spawnCount >= this.numberToSpawn) {
            this.clearRepeater();
            return;
        }
        var monster = cc.instantiate(this.prefab);
        this.canvas.node.addChild(monster);
        monster.position = this.getRandomPosition();
        this.spawnCount++;
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        self.randomRange = cc.p(300, 200);
        self.spawnCount = 0;
        self.schedule(self.addSpawn, self.spawnInterval);
    },

    getRandomPosition: function getRandomPosition() {
        return cc.p(cc.randomMinus1To1() * this.randomRange.x, cc.randomMinus1To1() * this.randomRange.y);
    },

    clearRepeater: function clearRepeater() {
        this.unschedule(this.addSpawn);
    }
});

cc._RFpop();
},{}],"ProgressBar":[function(require,module,exports){
cc._RFpush(module, '84a43yb9OxBX6HMQxPzHQyz', 'ProgressBar');
// cases\02_ui\04_progressbar\ProgressBar.js

"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        horizontalBar: {
            type: cc.ProgressBar,
            "default": null
        },
        horizontalBarReverse: {
            type: cc.ProgressBar,
            "default": null
        },
        verticalBar: {
            type: cc.ProgressBar,
            "default": null
        },
        verticalBarReverse: {
            type: cc.ProgressBar,
            "default": null
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this._updateProgressBar(this.horizontalBar, dt);
        this._updateProgressBar(this.verticalBar, dt);
        this._updateProgressBar(this.horizontalBarReverse, dt);
        this._updateProgressBar(this.verticalBarReverse, dt);
    },

    _updateProgressBar: function _updateProgressBar(progressBar, dt) {
        var progress = progressBar.progress;
        if (progress < 1.0) {
            progress += dt;
        } else {
            progress = 0;
        }
        progressBar.progress = progress;
    }
});

cc._RFpop();
},{}],"ReferenceTypeProperties":[function(require,module,exports){
cc._RFpush(module, '9341f3fDdBMjJLKh4D+kJJK', 'ReferenceTypeProperties');
// cases\05_scripting\01_properties\ReferenceTypeProperties.js

'use strict';

var MyCustomComponent = require('MyCustomComponent');

cc.Class({
    'extends': cc.Component,

    properties: {
        myNode: {
            'default': null,
            type: cc.Node
        },
        mySprite: {
            'default': null,
            type: cc.Sprite
        },
        myLabel: {
            'default': null,
            type: cc.Label
        },
        myComponent: {
            'default': null,
            type: MyCustomComponent
        },
        mySpriteFrame: {
            'default': null,
            type: cc.SpriteFrame
        },
        myAtlas: {
            'default': null,
            type: cc.SpriteAtlas
        },
        myPrefab: {
            'default': null,
            type: cc.Prefab
        },
        myAudioClip: {
            'default': null,
            url: cc.AudioClip
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.myLabel.string = this.myComponent.getPower().toString();
    },

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();
},{"MyCustomComponent":"MyCustomComponent"}],"SceneList":[function(require,module,exports){
cc._RFpush(module, '473b8wxs55OsJvoxVdYCzTF', 'SceneList');
// scripts\Global\SceneList.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        itemPrefab: {
            'default': null,
            type: cc.Prefab
        }
    },

    createItem: function createItem(x, y, name, url) {
        var item = cc.instantiate(this.itemPrefab);
        var itemComp = item.getComponent('ListItem');
        var label = itemComp.label;
        label.string = name;

        if (url) {
            itemComp.url = url;
        }

        // item.width = w;
        item.x = x;
        item.y = y;
        this.node.addChild(item);
        return item;
    },

    // use this for initialization
    onLoad: function onLoad() {
        var scenes = cc.game._sceneInfos;
        var list = {};
        if (scenes) {
            var i, j;
            for (i = 0; i < scenes.length; ++i) {
                var url = scenes[i].url;
                var dirname = cc.path.dirname(url).replace('db://assets/cases/', '');
                var scenename = cc.path.basename(url, '.fire');
                if (scenename === 'TestList') continue;

                if (!dirname) dirname = '_root';
                if (!list[dirname]) {
                    list[dirname] = {};
                }
                list[dirname][scenename] = url;
            }

            var dirs = Object.keys(list);
            dirs.sort();
            var y = -50;

            for (i = 0; i < dirs.length; ++i) {
                var dirname = dirs[i];
                var item = this.createItem(100, y, dirname);
                item.getComponent(cc.Widget).left = 60;
                item.getComponent(cc.Sprite).enabled = false;
                y -= 50;
                var scenenames = Object.keys(list[dirname]);
                scenenames.sort();
                for (j = 0; j < scenenames.length; ++j) {
                    var _name = scenenames[j];
                    var url = list[dirname][_name];
                    var _item = this.createItem(200, y, _name, url);
                    _item.getComponent(cc.Widget).left = 120;
                    _item.color = cc.Color.WHITE;
                    y -= 50;
                }
            }
            this.node.height = Math.abs(y) + 30;
        }
    }
});

cc._RFpop();
},{}],"SheepAnimation1":[function(require,module,exports){
cc._RFpush(module, 'ae6fcR8cuFGRYHW525VJD/k', 'SheepAnimation1');
// cases\03_gameplay\03_animation\SheepAnimation1.js

"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        sheepAnim: {
            "default": null,
            type: cc.Animation
        },

        alamiAnim: {
            "default": null,
            type: cc.Animation
        }
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        var anim = this.sheepAnim;
        setTimeout(function () {
            anim.play('sheep_jump');
        }, 2000);
    },

    // called every frame
    update: function update(dt) {},

    onBtnClicked: function onBtnClicked() {
        var alami = this.alamiAnim;
        alami.play("alami_talking");
    }

});

cc._RFpop();
},{}],"SimpleAction":[function(require,module,exports){
cc._RFpush(module, 'b6067a1+J5FW4G30nmVLU/d', 'SimpleAction');
// cases\03_gameplay\02_actions\SimpleAction.js

"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        jumper: {
            "default": null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.squashAction = cc.scaleTo(0.2, 1, 0.6);
        this.stretchAction = cc.scaleTo(0.2, 1, 1.2);
        this.scaleBackAction = cc.scaleTo(0.1, 1, 1);
        this.moveUpAction = cc.moveBy(1, cc.p(0, 200)).easing(cc.easeCubicActionOut());
        this.moveDownAction = cc.moveBy(1, cc.p(0, -200)).easing(cc.easeCubicActionIn());
        var seq = cc.sequence(this.squashAction, this.stretchAction, this.moveUpAction, this.scaleBackAction, this.moveDownAction, this.squashAction, this.scaleBackAction);
        // this is a temp api which will be combined to cc.Node
        this.jumper.runAction(seq);
    },

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();
},{}],"SimpleKeyboardMovement":[function(require,module,exports){
cc._RFpush(module, 'c3f971iyCdIh6xdaO49XP0F', 'SimpleKeyboardMovement');
// cases\03_gameplay\01_player_control\SimpleKeyboardMovement.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        sheep: {
            'default': null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;

        // set initial move direction
        self.turnRight();

        //add keyboard input listener to call turnLeft and turnRight
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function onKeyPressed(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.a:
                    case cc.KEY.left:
                        console.log('turn left');
                        self.turnLeft();
                        break;
                    case cc.KEY.d:
                    case cc.KEY.right:
                        console.log('turn right');
                        self.turnRight();
                        break;
                }
            }
        }, self.node);
    },

    // called every frame
    update: function update(dt) {
        this.sheep.x += this.speed * dt;
    },

    turnLeft: function turnLeft() {
        this.speed = -100;
        this.sheep.scaleX = 1;
    },

    turnRight: function turnRight() {
        this.speed = 100;
        this.sheep.scaleX = -1;
    }
});

cc._RFpop();
},{}],"SpriteFollowTouch":[function(require,module,exports){
cc._RFpush(module, '90aed86Xu1DZoaevFdcthY3', 'SpriteFollowTouch');
// cases\03_gameplay\01_player_control\SpriteFollowTouch.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        touchLocationDisplay: {
            'default': null,
            type: cc.Label
        },
        follower: {
            'default': null,
            type: cc.Node
        },
        followSpeed: 0
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        self.moveToPos = cc.p(0, 0);
        self.isMoving = false;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function onTouchBegan(touch, event) {
                var touchLoc = touch.getLocation();
                self.isMoving = true;
                self.moveToPos = self.follower.parent.convertToNodeSpaceAR(touchLoc);
                return true; // don't capture event
            },
            onTouchMoved: function onTouchMoved(touch, event) {
                var touchLoc = touch.getLocation();
                self.touchLocationDisplay.string = 'touch (' + Math.floor(touchLoc.x) + ', ' + Math.floor(touchLoc.y) + ')';
                self.moveToPos = self.follower.parent.convertToNodeSpaceAR(touchLoc);
            },
            onTouchEnded: function onTouchEnded(touch, event) {
                self.isMoving = false; // when touch ended, stop moving
            }
        }, self.node);
    },

    // called every frame
    update: function update(dt) {
        if (!this.isMoving) return;
        var oldPos = this.follower.position;
        // get move direction
        var direction = cc.pNormalize(cc.pSub(this.moveToPos, oldPos));
        // multiply direction with distance to get new position
        var newPos = cc.pAdd(oldPos, cc.pMult(direction, this.followSpeed * dt));
        // set new position
        this.follower.setPosition(newPos);
    }
});

cc._RFpop();
},{}],"TouchDragger":[function(require,module,exports){
cc._RFpush(module, '95021X5KjxP369OONe316sH', 'TouchDragger');
// cases\05_scripting\03_events\TouchDragger.js

"use strict";

var TouchDragger = cc.Class({
    "extends": cc.Component,

    properties: {
        propagate: {
            "default": false
        }
    },

    // ...
    // use this for initialization
    onLoad: function onLoad() {
        this.node.opacity = 160;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            this.opacity = 255;
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            this.opacity = 255;
            var delta = event.touch.getDelta();
            this.x += delta.x;
            this.y += delta.y;
            if (this.getComponent(TouchDragger).propagate) event.stopPropagation();
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            this.opacity = 160;
        }, this.node);
    }
});

cc._RFpop();
},{}],"TouchEvent":[function(require,module,exports){
cc._RFpush(module, 'a14bfaD+gRJKrTVjKwitc53', 'TouchEvent');
// cases\05_scripting\03_events\TouchEvent.js

"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    _callback: null,

    // use this for initialization
    onLoad: function onLoad() {
        this.node.opacity = 100;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            this.node.opacity = 255;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            this.node.opacity = 100;
            if (this._callback) {
                this._callback();
            }
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
            this.node.opacity = 100;
        }, this);
    }
});

cc._RFpop();
},{}],"ValueTypeProperties":[function(require,module,exports){
cc._RFpush(module, 'd9bf6bFb+tF779stLEmjzTV', 'ValueTypeProperties');
// cases\05_scripting\01_properties\ValueTypeProperties.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        // number
        myNumber: {
            'default': 0,
            type: Number
        },
        // string
        myString: {
            'default': 'default text',
            type: String
        },
        myVec2: {
            'default': cc.Vec2.ZERO,
            type: cc.Vec2
        },
        myColor: {
            'default': cc.Color.WHITE,
            type: cc.Color
        },
        myOtherNumber: 0,
        myOtherString: 'no type definition',
        myOtherVec2: cc.Vec2.ONE,
        myOtherColor: cc.Color.BLACK
    },

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();
},{}],"scheduleCallbacks":[function(require,module,exports){
cc._RFpush(module, '930deImxoZIkp6ugjMU5ULW', 'scheduleCallbacks');
// cases\05_scripting\04_scheduler\scheduleCallbacks.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        time: {
            'default': 5
        }
    },

    _callback: function _callback() {
        this.node.runAction(this.seq);
        if (this.repeat) {
            this.counting = true;
        } else {
            this.counting = false;
        }
        this.time = 5;
        this.counter.string = this.time.toFixed(2) + ' s';
    },

    // use this for initialization
    onLoad: function onLoad() {
        var squashAction = cc.scaleTo(0.2, 1, 0.6);
        var stretchAction = cc.scaleTo(0.2, 1, 1.2);
        var scaleBackAction = cc.scaleTo(0.1, 1, 1);
        var moveUpAction = cc.moveBy(1, cc.p(0, 100)).easing(cc.easeCubicActionOut());
        var moveDownAction = cc.moveBy(1, cc.p(0, -100)).easing(cc.easeCubicActionIn());
        this.seq = cc.sequence(squashAction, stretchAction, moveUpAction, scaleBackAction, moveDownAction, squashAction, scaleBackAction);

        this.counter = cc.find('Canvas/count_label').getComponent(cc.Label);
        this.counter.string = this.time.toFixed(2) + ' s';
        this.counting = false;
        this.repeat = false;
    },

    // called every frame
    update: function update(dt) {
        if (this.counting) {
            this.time -= dt;
            this.counter.string = this.time.toFixed(2) + ' s';
        }
    },

    stopCounting: function stopCounting() {
        this.unschedule(this._callback);
        this.counting = false;
        this.counter.string = '5.00 s';
        this.time = 5;
    },

    repeatSchedule: function repeatSchedule() {
        this.stopCounting();
        this.schedule(this._callback, 5);
        this.repeat = true;
        this.counting = true;
    },

    oneSchedule: function oneSchedule() {
        this.stopCounting();
        this.scheduleOnce(this._callback, 5);
        this.repeat = false;
        this.counting = true;
    },

    cancelSchedules: function cancelSchedules() {
        this.repeat = false;
        this.stopCounting();
    }
});

cc._RFpop();
},{}]},{},["Menu","ActionCallback","SceneList","CustomEvent","Instruction","MyCustomComponent","MouseEvent","PopulatePrefab","ParticleControl1","ProgressBar","AudioControl","MonsterPrefab","SpriteFollowTouch","Item","scheduleCallbacks","ReferenceTypeProperties","TouchDragger","TouchEvent","ListItem","SheepAnimation1","SimpleAction","NodeGroupControl","SimpleKeyboardMovement","Helpers","NonSerializedProperties","ValueTypeProperties","ListView","ButtonControl1"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L3plbmdsaW5nbWluZy9Db2Nvc0NyZWF0b3IvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzAzX2V2ZW50cy9BY3Rpb25DYWxsYmFjay5qcyIsImFzc2V0cy9jYXNlcy8wNF9hdWRpby9BdWRpb0NvbnRyb2wuanMiLCJhc3NldHMvY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkNvbnRyb2wxLmpzIiwiYXNzZXRzL2Nhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvQ3VzdG9tRXZlbnQuanMiLCJhc3NldHMvc2NyaXB0cy9HbG9iYWwvSGVscGVycy5qcyIsImFzc2V0cy9zY3JpcHRzL0dsb2JhbC9JbnN0cnVjdGlvbi5qcyIsImFzc2V0cy9jYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L0l0ZW0uanMiLCJhc3NldHMvc2NyaXB0cy9HbG9iYWwvTGlzdEl0ZW0uanMiLCJhc3NldHMvY2FzZXMvMDJfdWkvMDVfc2Nyb2xsVmlldy9MaXN0Vmlldy5qcyIsImFzc2V0cy9zY3JpcHRzL0dsb2JhbC9NZW51LmpzIiwiYXNzZXRzL2Nhc2VzLzA1X3NjcmlwdGluZy8wMl9wcmVmYWIvTW9uc3RlclByZWZhYi5qcyIsImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL01vdXNlRXZlbnQuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvTXlDdXN0b21Db21wb25lbnQuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvTm9kZUdyb3VwQ29udHJvbC5qcyIsImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9Ob25TZXJpYWxpemVkUHJvcGVydGllcy5qcyIsImFzc2V0cy9jYXNlcy8wMV9ncmFwaGljcy8wMl9wYXJ0aWNsZS9QYXJ0aWNsZUNvbnRyb2wxLmpzIiwiYXNzZXRzL2Nhc2VzLzA1X3NjcmlwdGluZy8wMl9wcmVmYWIvUG9wdWxhdGVQcmVmYWIuanMiLCJhc3NldHMvY2FzZXMvMDJfdWkvMDRfcHJvZ3Jlc3NiYXIvUHJvZ3Jlc3NCYXIuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvUmVmZXJlbmNlVHlwZVByb3BlcnRpZXMuanMiLCJhc3NldHMvc2NyaXB0cy9HbG9iYWwvU2NlbmVMaXN0LmpzIiwiYXNzZXRzL2Nhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9TaGVlcEFuaW1hdGlvbjEuanMiLCJhc3NldHMvY2FzZXMvMDNfZ2FtZXBsYXkvMDJfYWN0aW9ucy9TaW1wbGVBY3Rpb24uanMiLCJhc3NldHMvY2FzZXMvMDNfZ2FtZXBsYXkvMDFfcGxheWVyX2NvbnRyb2wvU2ltcGxlS2V5Ym9hcmRNb3ZlbWVudC5qcyIsImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wMV9wbGF5ZXJfY29udHJvbC9TcHJpdGVGb2xsb3dUb3VjaC5qcyIsImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL1RvdWNoRHJhZ2dlci5qcyIsImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL1RvdWNoRXZlbnQuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvVmFsdWVUeXBlUHJvcGVydGllcy5qcyIsImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDRfc2NoZWR1bGVyL3NjaGVkdWxlQ2FsbGJhY2tzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJzI4ODFlNksxZWRMQmJndmMrNi9ZTjdvJywgJ0FjdGlvbkNhbGxiYWNrJyk7XG4vLyBjYXNlc1xcMDVfc2NyaXB0aW5nXFwwM19ldmVudHNcXEFjdGlvbkNhbGxiYWNrLmpzXG5cbid1c2Ugc3RyaWN0JztcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciB0b3VjaEV2ZW50ID0gdGhpcy5nZXRDb21wb25lbnQoJ1RvdWNoRXZlbnQnKTtcbiAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSB0aGlzLmdldENvbXBvbmVudCgnTW91c2VFdmVudCcpO1xuICAgICAgICB2YXIgZXZlbnQgPSB0b3VjaEV2ZW50IHx8IG1vdXNlRXZlbnQ7XG4gICAgICAgIGV2ZW50Ll9jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjUsIDIsIDEpLCBjYy5zY2FsZVRvKDAuMjUsIDEsIDEpKSk7XG4gICAgICAgIH07XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnOGM5NWJUMk0zaEJQSWRSRFZmdGlVUUcnLCAnQXVkaW9Db250cm9sJyk7XG4vLyBjYXNlc1xcMDRfYXVkaW9cXEF1ZGlvQ29udHJvbC5qc1xuXG5cInVzZSBzdHJpY3RcIjtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG11c2ljUGxheWVyOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvU291cmNlXG4gICAgICAgIH0sXG4gICAgICAgIGRpbmdDbGlwOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHVybDogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgICAgIGNoZWVyaW5nQ2xpcDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIHBsYXkgYXVkaW9Tb3VyY2VcbiAgICAgICAgc2VsZi5tdXNpY1BsYXllci5wbGF5KCk7XG5cbiAgICAgICAgLy8gcGxheSBkaW5nIGluIDEgc2VjLCBwbGF5IGNoZWVyaW5nIGluIDIgc2VjXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChzZWxmLmRpbmdDbGlwLCBmYWxzZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHNlbGYuY2hlZXJpbmdDbGlwLCBmYWxzZSk7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7fVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnZTZkYzdkV2N4eEp1b2ZYQjdlcmdHbkMnLCAnQnV0dG9uQ29udHJvbDEnKTtcbi8vIGNhc2VzXFwwMl91aVxcMDNfYnV0dG9uXFxCdXR0b25Db250cm9sMS5qc1xuXG4ndXNlIHN0cmljdCc7XG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYnV0dG9uTGVmdDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvblJpZ2h0OiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcblxuICAgICAgICBidXR0b25BbmltOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BbmltYXRpb25cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gWW91IGNhbiBhbHNvIHJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyIHVzaW5nIHRoZSBtZXRob2QgYmVsb3dcbiAgICAgICAgLy8gdGhpcy5idXR0b25MZWZ0LmdldENvbXBvbmVudChjYy5CdXR0b24pLm9uKGNjLkVCdXR0b24uRVZFTlRfVE9VQ0hfVVAsIHRoaXMub25CdG5MZWZ0Q2xpY2tlZCwgdGhpcyk7XG4gICAgICAgIC8vIHRoaXMuYnV0dG9uUmlnaHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikub24oY2MuRUJ1dHRvbi5FVkVOVF9UT1VDSF9VUCwgdGhpcy5vbkJ0blJpZ2h0Q2xpY2tlZCwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uQnRuTGVmdENsaWNrZWQ6IGZ1bmN0aW9uIG9uQnRuTGVmdENsaWNrZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMZWZ0IGJ1dHRvbiBjbGlja2VkIScpO1xuICAgICAgICB0aGlzLmRpc3BsYXkuc3RyaW5nID0gJ0xlZnQgYnV0dG9uIGNsaWNrZWQhJztcbiAgICAgICAgdGhpcy5kaXNwbGF5LnN0cmluZyA9ICdoZWhlJztcbiAgICAgICAgdmFyIGFuaW0gPSB0aGlzLmJ1dHRvbkFuaW07XG4gICAgICAgIGFuaW0ucGxheSgnYnV0dG9uX21vdmUnKTtcbiAgICB9LFxuXG4gICAgb25CdG5SaWdodENsaWNrZWQ6IGZ1bmN0aW9uIG9uQnRuUmlnaHRDbGlja2VkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnUmlnaHQgYnV0dG9uIGNsaWNrZWQhJyk7XG4gICAgICAgIHRoaXMuZGlzcGxheS5zdHJpbmcgPSAnUmlnaHQgYnV0dG9uIGNsaWNrZWQhJztcbiAgICB9LFxuXG4gICAgb25CdG5JblNjcm9sbENsaWNrZWQ6IGZ1bmN0aW9uIG9uQnRuSW5TY3JvbGxDbGlja2VkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQnV0dG9uIGluIFNjcm9sbHZpZXcgY2xpY2tlZCEnKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5LnN0cmluZyA9ICdCdXR0b24gaW4gU2Nyb2xsVmlldyBjbGlja2VkISc7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnNWNjMjNhb1ljeElLYXpSRndLV0dFSTcnLCAnQ3VzdG9tRXZlbnQnKTtcbi8vIGNhc2VzXFwwNV9zY3JpcHRpbmdcXDAzX2V2ZW50c1xcQ3VzdG9tRXZlbnQuanNcblxuJ3VzZSBzdHJpY3QnO1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHRvdWNoRXZlbnQgPSB0aGlzLmdldENvbXBvbmVudCgnVG91Y2hFdmVudCcpO1xuXG4gICAgICAgIC8vIEVtaXQgQ1VTVE9NX0VWRU5UIHRvIGl0cyBsaXN0ZW5lcnMgd2hpbGUgdG91Y2ggZW5kXG4gICAgICAgIHRvdWNoRXZlbnQuX2NhbGxiYWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KCdDVVNUT01fRVZFTlQnKTtcbiAgICAgICAgfSkuYmluZCh0aGlzKTtcblxuICAgICAgICB2YXIgYWRkQnV0dG9uID0gY2MuZmluZCgnQ2FudmFzL2FkZCcpO1xuICAgICAgICB2YXIgY2FuY2VsQnV0dG9uID0gY2MuZmluZCgnQ2FudmFzL2NhbmNlbCcpO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uQ3VzdG9tRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC41LCAyLCAxKSwgY2Muc2NhbGVUbygwLjI1LCAxLCAxKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKCdDVVNUT01fRVZFTlQnLCBvbkN1c3RvbUV2ZW50LCBhZGRCdXR0b24pO1xuICAgICAgICB0aGlzLm5vZGUub24oJ0NVU1RPTV9FVkVOVCcsIG9uQ3VzdG9tRXZlbnQsIGNhbmNlbEJ1dHRvbik7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnYzg2NDBNM296UkVyclYvR28zdVRrbnQnLCAnSGVscGVycycpO1xuLy8gc2NyaXB0c1xcR2xvYmFsXFxIZWxwZXJzLmpzXG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGV4Y2x1ZGVkKVxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0UmFuZG9tSW50OiBnZXRSYW5kb21JbnRcbn07XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnNmE4NzFneTczRkRMYXAzRWplLzJoNmknLCAnSW5zdHJ1Y3Rpb24nKTtcbi8vIHNjcmlwdHNcXEdsb2JhbFxcSW5zdHJ1Y3Rpb24uanNcblxuJ3VzZSBzdHJpY3QnO1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogJycsXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBtdWx0aWxpbmU6IHRydWVcbiAgICAgICAgfVxuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7fVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnOTIwYzhhNU1haEFoYkNUU3ZtUXZhQisnLCAnSXRlbScpO1xuLy8gY2FzZXNcXDAyX3VpXFwwNV9zY3JvbGxWaWV3XFxJdGVtLmpzXG5cbid1c2Ugc3RyaWN0JztcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgaXRlbUlEOiAwXG4gICAgfSxcblxuICAgIHVwZGF0ZUl0ZW06IGZ1bmN0aW9uIHVwZGF0ZUl0ZW0odG1wbElkLCBpdGVtSWQpIHtcbiAgICAgICAgdGhpcy5pdGVtSUQgPSBpdGVtSWQ7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ1RtcGwjJyArIHRtcGxJZCArICcgSXRlbSMnICsgdGhpcy5pdGVtSUQ7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnYWE2M2JXTkU4aEJmNFA0U3AwWDJ1VDAnLCAnTGlzdEl0ZW0nKTtcbi8vIHNjcmlwdHNcXEdsb2JhbFxcTGlzdEl0ZW0uanNcblxuJ3VzZSBzdHJpY3QnO1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICB1cmw6ICcnXG4gICAgfSxcblxuICAgIGxvYWRFeGFtcGxlOiBmdW5jdGlvbiBsb2FkRXhhbXBsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsKSB7XG4gICAgICAgICAgICBjYy5maW5kKCdNZW51JykuZ2V0Q29tcG9uZW50KCdNZW51JykubG9hZFNjZW5lKHRoaXMudXJsKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJ2U2NDU4K2hmNVZBbklYb2NtdmhnZ3FDJywgJ0xpc3RWaWV3Jyk7XG4vLyBjYXNlc1xcMDJfdWlcXDA1X3Njcm9sbFZpZXdcXExpc3RWaWV3LmpzXG5cbid1c2Ugc3RyaWN0JztcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpdGVtVGVtcGxhdGU6IHsgLy8gaXRlbSB0ZW1wbGF0ZSB0byBpbnN0YW50aWF0ZSBvdGhlciBpdGVtc1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGxWaWV3OiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TY3JvbGxWaWV3XG4gICAgICAgIH0sXG4gICAgICAgIHNwYXduQ291bnQ6IDAsIC8vIGhvdyBtYW55IGl0ZW1zIHdlIGFjdHVhbGx5IHNwYXduXG4gICAgICAgIHRvdGFsQ291bnQ6IDAsIC8vIGhvdyBtYW55IGl0ZW1zIHdlIG5lZWQgZm9yIHRoZSB3aG9sZSBsaXN0XG4gICAgICAgIHNwYWNpbmc6IDAsIC8vIHNwYWNlIGJldHdlZW4gZWFjaCBpdGVtXG4gICAgICAgIGJ1ZmZlclpvbmU6IDAgfSxcblxuICAgIC8vIHdoZW4gaXRlbSBpcyBhd2F5IGZyb20gYnVmZmVyWm9uZSwgd2UgcmVsb2NhdGUgaXRcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQ7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTsgLy8gYXJyYXkgdG8gc3RvcmUgc3Bhd25lZCBpdGVtc1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSAwLjI7XG4gICAgICAgIHRoaXMubGFzdENvbnRlbnRQb3NZID0gMDsgLy8gdXNlIHRoaXMgdmFyaWFibGUgdG8gZGV0ZWN0IGlmIHdlIGFyZSBzY3JvbGxpbmcgdXAgb3IgZG93blxuICAgIH0sXG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQuaGVpZ2h0ID0gdGhpcy50b3RhbENvdW50ICogKHRoaXMuaXRlbVRlbXBsYXRlLmhlaWdodCArIHRoaXMuc3BhY2luZykgKyB0aGlzLnNwYWNpbmc7IC8vIGdldCB0b3RhbCBjb250ZW50IGhlaWdodFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3Bhd25Db3VudDsgKytpKSB7XG4gICAgICAgICAgICAvLyBzcGF3biBpdGVtcywgd2Ugb25seSBuZWVkIHRvIGRvIHRoaXMgb25jZVxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1UZW1wbGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKDAsIC1pdGVtLmhlaWdodCAqICgwLjUgKyBpKSAtIHRoaXMuc3BhY2luZyAqIChpICsgMSkpO1xuICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoJ0l0ZW0nKS51cGRhdGVJdGVtKGksIGkpO1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldFBvc2l0aW9uSW5WaWV3OiBmdW5jdGlvbiBnZXRQb3NpdGlvbkluVmlldyhpdGVtKSB7XG4gICAgICAgIC8vIGdldCBpdGVtIHBvc2l0aW9uIGluIHNjcm9sbHZpZXcncyBub2RlIHNwYWNlXG4gICAgICAgIHZhciB3b3JsZFBvcyA9IGl0ZW0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihpdGVtLnBvc2l0aW9uKTtcbiAgICAgICAgdmFyIHZpZXdQb3MgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgIHJldHVybiB2aWV3UG9zO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyICs9IGR0O1xuICAgICAgICBpZiAodGhpcy51cGRhdGVUaW1lciA8IHRoaXMudXBkYXRlSW50ZXJ2YWwpIHJldHVybjsgLy8gd2UgZG9uJ3QgbmVlZCB0byBkbyB0aGUgbWF0aCBldmVyeSBmcmFtZVxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyID0gMDtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuYnVmZmVyWm9uZTtcbiAgICAgICAgdmFyIGlzRG93biA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnkgPCB0aGlzLmxhc3RDb250ZW50UG9zWTsgLy8gc2Nyb2xsaW5nIGRpcmVjdGlvblxuICAgICAgICB2YXIgb2Zmc2V0ID0gKHRoaXMuaXRlbVRlbXBsYXRlLmhlaWdodCArIHRoaXMuc3BhY2luZykgKiBpdGVtcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciB2aWV3UG9zID0gdGhpcy5nZXRQb3NpdGlvbkluVmlldyhpdGVtc1tpXSk7XG4gICAgICAgICAgICBpZiAoaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgYXdheSBmcm9tIGJ1ZmZlciB6b25lIGFuZCBub3QgcmVhY2hpbmcgdG9wIG9mIGNvbnRlbnRcbiAgICAgICAgICAgICAgICBpZiAodmlld1Bvcy55IDwgLWJ1ZmZlciAmJiBpdGVtc1tpXS55ICsgb2Zmc2V0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpXS5zZXRQb3NpdGlvblkoaXRlbXNbaV0ueSArIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV0uZ2V0Q29tcG9uZW50KCdJdGVtJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtSWQgPSBpdGVtLml0ZW1JRCAtIGl0ZW1zLmxlbmd0aDsgLy8gdXBkYXRlIGl0ZW0gaWRcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51cGRhdGVJdGVtKGksIGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBhd2F5IGZyb20gYnVmZmVyIHpvbmUgYW5kIG5vdCByZWFjaGluZyBib3R0b20gb2YgY29udGVudFxuICAgICAgICAgICAgICAgIGlmICh2aWV3UG9zLnkgPiBidWZmZXIgJiYgaXRlbXNbaV0ueSAtIG9mZnNldCA+IC10aGlzLmNvbnRlbnQuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLnNldFBvc2l0aW9uWShpdGVtc1tpXS55IC0gb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXS5nZXRDb21wb25lbnQoJ0l0ZW0nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW1JRDogJyArIGl0ZW0uaXRlbUlEKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1JZCA9IGl0ZW0uaXRlbUlEICsgaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnVwZGF0ZUl0ZW0oaSwgaXRlbUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlIGxhc3RDb250ZW50UG9zWVxuICAgICAgICB0aGlzLmxhc3RDb250ZW50UG9zWSA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50Lnk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnMDQ1MjVweVlCbE4yNlNXYXdhVUYzZEEnLCAnTWVudScpO1xuLy8gc2NyaXB0c1xcR2xvYmFsXFxNZW51LmpzXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuYyA9IGZ1bmN0aW9uIGVtcHR5RnVuYyhldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufTtcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICByZWFkbWU6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgbWFzazoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBidG5JbmZvOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgYnRuQmFjazoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lVXJsID0gJ1Rlc3RMaXN0LmZpcmUnO1xuICAgICAgICB0aGlzLmxvYWRJbnN0cnVjdGlvbih0aGlzLmN1cnJlbnRTY2VuZVVybCk7XG4gICAgfSxcblxuICAgIGJhY2tUb0xpc3Q6IGZ1bmN0aW9uIGJhY2tUb0xpc3QoKSB7XG4gICAgICAgIHRoaXMuc2hvd1JlYWRtZShmYWxzZSk7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lVXJsID0gJ1Rlc3RMaXN0LmZpcmUnO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1Rlc3RMaXN0JywgdGhpcy5vbkxvYWRTY2VuZUZpbmlzaC5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgbG9hZFNjZW5lOiBmdW5jdGlvbiBsb2FkU2NlbmUodXJsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lVXJsID0gdXJsO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodXJsLCB0aGlzLm9uTG9hZFNjZW5lRmluaXNoLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBvbkxvYWRTY2VuZUZpbmlzaDogZnVuY3Rpb24gb25Mb2FkU2NlbmVGaW5pc2goKSB7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmN1cnJlbnRTY2VuZVVybDtcbiAgICAgICAgdGhpcy5sb2FkSW5zdHJ1Y3Rpb24odXJsKTtcbiAgICB9LFxuXG4gICAgbG9hZEluc3RydWN0aW9uOiBmdW5jdGlvbiBsb2FkSW5zdHJ1Y3Rpb24odXJsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIG1kVXJsID0gdXJsLnJlcGxhY2UoL1xcLmZpcmUkLywgJy5tZCcpLnJlcGxhY2UoJ2RiOi8vYXNzZXRzLycsICcnKTtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRUeHQoY2MudXJsLnJhdyhtZFVybCksIGZ1bmN0aW9uIChlcnIsIHR4dCkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHNlbGYudGV4dC5zdHJpbmcgPSAn6K+05piO5pqC57y6JztcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnRleHQuc3RyaW5nID0gdHh0O1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2hvd1JlYWRtZTogZnVuY3Rpb24gc2hvd1JlYWRtZShhY3RpdmUpIHtcbiAgICAgICAgaWYgKGFjdGl2ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRtZS5hY3RpdmUgPSAhdGhpcy5yZWFkbWUuYWN0aXZlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWFkbWUuYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlYWRtZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubWFzay5vbigndG91Y2hzdGFydCcsIGVtcHR5RnVuYywgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hc2sub2ZmKCd0b3VjaHN0YXJ0JywgZW1wdHlGdW5jLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGFiZWxUeHQgPSB0aGlzLnJlYWRtZS5hY3RpdmUgPyAn5YWz6Zet6K+05piOJyA6ICfmn6XnnIvor7TmmI4nO1xuICAgICAgICBjYy5maW5kKCdsYWJlbCcsIHRoaXMuYnRuSW5mby5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGxhYmVsVHh0O1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJzhjYjRkbTJRRXBKN3BuYVMvY2pydmdGJywgJ01vbnN0ZXJQcmVmYWInKTtcbi8vIGNhc2VzXFwwNV9zY3JpcHRpbmdcXDAyX3ByZWZhYlxcTW9uc3RlclByZWZhYi5qc1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBIZWxwZXJzID0gcmVxdWlyZSgnSGVscGVycycpO1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwcml0ZUxpc3Q6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciByYW5kb21JZHggPSBIZWxwZXJzLmdldFJhbmRvbUludCgwLCB0aGlzLnNwcml0ZUxpc3QubGVuZ3RoKTtcbiAgICAgICAgdmFyIHNwcml0ZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlTGlzdFtyYW5kb21JZHhdO1xuICAgIH1cblxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnNmRmMGZ0MWp5NUpnNGNRMDM5anQ4akMnLCAnTW91c2VFdmVudCcpO1xuLy8gY2FzZXNcXDA1X3NjcmlwdGluZ1xcMDNfZXZlbnRzXFxNb3VzZUV2ZW50LmpzXG5cblwidXNlIHN0cmljdFwiO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnNjcm9sbCA9IDA7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gNTA7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAxNjA7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gNTA7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfVVAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gNTA7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX1dIRUVMLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsICs9IGV2ZW50LmdldFNjcm9sbFkoKTtcbiAgICAgICAgICAgIHZhciBoID0gdGhpcy5ub2RlLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsID0gY2MuY2xhbXBmKHRoaXMuc2Nyb2xsLCAtMiAqIGgsIDAuNyAqIGgpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMSAtIHRoaXMuc2Nyb2xsIC8gaDtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnNmI4YmFFcEx1eEFDSU1ObElMMnZ3MlcnLCAnTXlDdXN0b21Db21wb25lbnQnKTtcbi8vIGNhc2VzXFwwNV9zY3JpcHRpbmdcXDAxX3Byb3BlcnRpZXNcXE15Q3VzdG9tQ29tcG9uZW50LmpzXG5cblwidXNlIHN0cmljdFwiO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcG93ZXI6IDEwXG4gICAgfSxcblxuICAgIGdldFBvd2VyOiBmdW5jdGlvbiBnZXRQb3dlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG93ZXI7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnYmQ0YTIrYnJpdEFsb2YwVWRNQ1ZCOGMnLCAnTm9kZUdyb3VwQ29udHJvbCcpO1xuLy8gY2FzZXNcXDA1X3NjcmlwdGluZ1xcMDFfcHJvcGVydGllc1xcTm9kZUdyb3VwQ29udHJvbC5qc1xuXG4ndXNlIHN0cmljdCc7XG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbm9kZUxpc3Q6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuTm9kZV1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmluZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYudG9nZ2xlTm9kZXNWaXNpYmlsaXR5KCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmluZXJ2YWxJZCk7XG4gICAgfSxcblxuICAgIHRvZ2dsZU5vZGVzVmlzaWJpbGl0eTogZnVuY3Rpb24gdG9nZ2xlTm9kZXNWaXNpYmlsaXR5KCkge1xuICAgICAgICBjb25zb2xlLmxvZygndG9nZ2xlIHZpc2liaWxpdHknKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5vZGVMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVMaXN0W2ldLmFjdGl2ZSA9ICF0aGlzLm5vZGVMaXN0W2ldLmFjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJ2Q0MTE0UGd5YmhKM0wvazBOOVRrQ1pJJywgJ05vblNlcmlhbGl6ZWRQcm9wZXJ0aWVzJyk7XG4vLyBjYXNlc1xcMDVfc2NyaXB0aW5nXFwwMV9wcm9wZXJ0aWVzXFxOb25TZXJpYWxpemVkUHJvcGVydGllcy5qc1xuXG4ndXNlIHN0cmljdCc7XG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbXlTZXJpYWxpemVkVGV4dDogJycsXG4gICAgICAgIG15Tm9uU2VyaWFsaXplZFRleHQ6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogJycsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBsYWJlbDE6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsMjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5teU5vblNlcmlhbGl6ZWRUZXh0ID0gJ0NhbiBvbmx5IHNldCB2YWx1ZSBpbiBzY3JpcHQnO1xuICAgICAgICB0aGlzLmxhYmVsMS5zdHJpbmcgPSB0aGlzLm15U2VyaWFsaXplZFRleHQ7XG4gICAgICAgIHRoaXMubGFiZWwyLnN0cmluZyA9IHRoaXMubXlOb25TZXJpYWxpemVkVGV4dDtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiY2MuX1JGcHVzaChtb2R1bGUsICc3OWFlM2hpUCtKQWhJS2VoYVd5aUt1aCcsICdQYXJ0aWNsZUNvbnRyb2wxJyk7XG4vLyBjYXNlc1xcMDFfZ3JhcGhpY3NcXDAyX3BhcnRpY2xlXFxQYXJ0aWNsZUNvbnRyb2wxLmpzXG5cblwidXNlIHN0cmljdFwiO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcGFydGljbGU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIHVzZSBzcGFjZSB0byB0b2dnbGUgcGFydGljbGVcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLktFWUJPQVJELFxuICAgICAgICAgICAgb25LZXlQcmVzc2VkOiBmdW5jdGlvbiBvbktleVByZXNzZWQoa2V5Q29kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gY2MuS0VZLnNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlUGFydGljbGVQbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzZWxmKTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlUGFydGljbGVQbGF5OiBmdW5jdGlvbiB0b2dnbGVQYXJ0aWNsZVBsYXkoKSB7XG4gICAgICAgIHZhciBteVBhcnRpY2xlID0gdGhpcy5wYXJ0aWNsZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xuICAgICAgICBpZiAobXlQYXJ0aWNsZS5pc0Z1bGwoKSkge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgcGFydGljbGUgaGFzIGZ1bGx5IHBsYWVkXG4gICAgICAgICAgICBteVBhcnRpY2xlLnN0b3BTeXN0ZW0oKTsgLy8gc3RvcCBwYXJ0aWNsZSBzeXN0ZW1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBteVBhcnRpY2xlLnJlc2V0U3lzdGVtKCk7IC8vIHJlc3RhcnQgcGFydGljbGUgc3lzdGVtXG4gICAgICAgICAgICB9XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnNzU1MThJMEltSkhYcVdOTkdSSU9tSmcnLCAnUG9wdWxhdGVQcmVmYWInKTtcbi8vIGNhc2VzXFwwNV9zY3JpcHRpbmdcXDAyX3ByZWZhYlxcUG9wdWxhdGVQcmVmYWIuanNcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwcmVmYWI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIGNhbnZhczoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5DYW52YXNcbiAgICAgICAgfSxcbiAgICAgICAgbnVtYmVyVG9TcGF3bjogMCxcbiAgICAgICAgc3Bhd25JbnRlcnZhbDogMFxuICAgIH0sXG5cbiAgICBhZGRTcGF3bjogZnVuY3Rpb24gYWRkU3Bhd24oKSB7XG4gICAgICAgIGlmICh0aGlzLnNwYXduQ291bnQgPj0gdGhpcy5udW1iZXJUb1NwYXduKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyUmVwZWF0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbW9uc3RlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKTtcbiAgICAgICAgdGhpcy5jYW52YXMubm9kZS5hZGRDaGlsZChtb25zdGVyKTtcbiAgICAgICAgbW9uc3Rlci5wb3NpdGlvbiA9IHRoaXMuZ2V0UmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5zcGF3bkNvdW50Kys7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYucmFuZG9tUmFuZ2UgPSBjYy5wKDMwMCwgMjAwKTtcbiAgICAgICAgc2VsZi5zcGF3bkNvdW50ID0gMDtcbiAgICAgICAgc2VsZi5zY2hlZHVsZShzZWxmLmFkZFNwYXduLCBzZWxmLnNwYXduSW50ZXJ2YWwpO1xuICAgIH0sXG5cbiAgICBnZXRSYW5kb21Qb3NpdGlvbjogZnVuY3Rpb24gZ2V0UmFuZG9tUG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiBjYy5wKGNjLnJhbmRvbU1pbnVzMVRvMSgpICogdGhpcy5yYW5kb21SYW5nZS54LCBjYy5yYW5kb21NaW51czFUbzEoKSAqIHRoaXMucmFuZG9tUmFuZ2UueSk7XG4gICAgfSxcblxuICAgIGNsZWFyUmVwZWF0ZXI6IGZ1bmN0aW9uIGNsZWFyUmVwZWF0ZXIoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmFkZFNwYXduKTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiY2MuX1JGcHVzaChtb2R1bGUsICc4NGE0M3liOU94Qlg2SE1ReFB6SFF5eicsICdQcm9ncmVzc0JhcicpO1xuLy8gY2FzZXNcXDAyX3VpXFwwNF9wcm9ncmVzc2JhclxcUHJvZ3Jlc3NCYXIuanNcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBob3Jpem9udGFsQmFyOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5Qcm9ncmVzc0JhcixcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGhvcml6b250YWxCYXJSZXZlcnNlOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5Qcm9ncmVzc0JhcixcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHZlcnRpY2FsQmFyOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5Qcm9ncmVzc0JhcixcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHZlcnRpY2FsQmFyUmV2ZXJzZToge1xuICAgICAgICAgICAgdHlwZTogY2MuUHJvZ3Jlc3NCYXIsXG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVByb2dyZXNzQmFyKHRoaXMuaG9yaXpvbnRhbEJhciwgZHQpO1xuICAgICAgICB0aGlzLl91cGRhdGVQcm9ncmVzc0Jhcih0aGlzLnZlcnRpY2FsQmFyLCBkdCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVByb2dyZXNzQmFyKHRoaXMuaG9yaXpvbnRhbEJhclJldmVyc2UsIGR0KTtcbiAgICAgICAgdGhpcy5fdXBkYXRlUHJvZ3Jlc3NCYXIodGhpcy52ZXJ0aWNhbEJhclJldmVyc2UsIGR0KTtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZVByb2dyZXNzQmFyOiBmdW5jdGlvbiBfdXBkYXRlUHJvZ3Jlc3NCYXIocHJvZ3Jlc3NCYXIsIGR0KSB7XG4gICAgICAgIHZhciBwcm9ncmVzcyA9IHByb2dyZXNzQmFyLnByb2dyZXNzO1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPCAxLjApIHtcbiAgICAgICAgICAgIHByb2dyZXNzICs9IGR0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHByb2dyZXNzQmFyLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnOTM0MWYzZkRkQk1qSkxLaDREK2tKSksnLCAnUmVmZXJlbmNlVHlwZVByb3BlcnRpZXMnKTtcbi8vIGNhc2VzXFwwNV9zY3JpcHRpbmdcXDAxX3Byb3BlcnRpZXNcXFJlZmVyZW5jZVR5cGVQcm9wZXJ0aWVzLmpzXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIE15Q3VzdG9tQ29tcG9uZW50ID0gcmVxdWlyZSgnTXlDdXN0b21Db21wb25lbnQnKTtcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBteU5vZGU6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgbXlTcHJpdGU6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxuICAgICAgICB9LFxuICAgICAgICBteUxhYmVsOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBteUNvbXBvbmVudDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogTXlDdXN0b21Db21wb25lbnRcbiAgICAgICAgfSxcbiAgICAgICAgbXlTcHJpdGVGcmFtZToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWVcbiAgICAgICAgfSxcbiAgICAgICAgbXlBdGxhczoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlQXRsYXNcbiAgICAgICAgfSxcbiAgICAgICAgbXlQcmVmYWI6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICBteUF1ZGlvQ2xpcDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5teUxhYmVsLnN0cmluZyA9IHRoaXMubXlDb21wb25lbnQuZ2V0UG93ZXIoKS50b1N0cmluZygpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge31cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJzQ3M2I4d3hzNTVPc0p2b3hWZFlDelRGJywgJ1NjZW5lTGlzdCcpO1xuLy8gc2NyaXB0c1xcR2xvYmFsXFxTY2VuZUxpc3QuanNcblxuJ3VzZSBzdHJpY3QnO1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGl0ZW1QcmVmYWI6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZUl0ZW06IGZ1bmN0aW9uIGNyZWF0ZUl0ZW0oeCwgeSwgbmFtZSwgdXJsKSB7XG4gICAgICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtUHJlZmFiKTtcbiAgICAgICAgdmFyIGl0ZW1Db21wID0gaXRlbS5nZXRDb21wb25lbnQoJ0xpc3RJdGVtJyk7XG4gICAgICAgIHZhciBsYWJlbCA9IGl0ZW1Db21wLmxhYmVsO1xuICAgICAgICBsYWJlbC5zdHJpbmcgPSBuYW1lO1xuXG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIGl0ZW1Db21wLnVybCA9IHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGl0ZW0ud2lkdGggPSB3O1xuICAgICAgICBpdGVtLnggPSB4O1xuICAgICAgICBpdGVtLnkgPSB5O1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNjZW5lcyA9IGNjLmdhbWUuX3NjZW5lSW5mb3M7XG4gICAgICAgIHZhciBsaXN0ID0ge307XG4gICAgICAgIGlmIChzY2VuZXMpIHtcbiAgICAgICAgICAgIHZhciBpLCBqO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNjZW5lcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBzY2VuZXNbaV0udXJsO1xuICAgICAgICAgICAgICAgIHZhciBkaXJuYW1lID0gY2MucGF0aC5kaXJuYW1lKHVybCkucmVwbGFjZSgnZGI6Ly9hc3NldHMvY2FzZXMvJywgJycpO1xuICAgICAgICAgICAgICAgIHZhciBzY2VuZW5hbWUgPSBjYy5wYXRoLmJhc2VuYW1lKHVybCwgJy5maXJlJyk7XG4gICAgICAgICAgICAgICAgaWYgKHNjZW5lbmFtZSA9PT0gJ1Rlc3RMaXN0JykgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRpcm5hbWUpIGRpcm5hbWUgPSAnX3Jvb3QnO1xuICAgICAgICAgICAgICAgIGlmICghbGlzdFtkaXJuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0W2Rpcm5hbWVdID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpc3RbZGlybmFtZV1bc2NlbmVuYW1lXSA9IHVybDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRpcnMgPSBPYmplY3Qua2V5cyhsaXN0KTtcbiAgICAgICAgICAgIGRpcnMuc29ydCgpO1xuICAgICAgICAgICAgdmFyIHkgPSAtNTA7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkaXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpcm5hbWUgPSBkaXJzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5jcmVhdGVJdGVtKDEwMCwgeSwgZGlybmFtZSk7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gNjA7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgeSAtPSA1MDtcbiAgICAgICAgICAgICAgICB2YXIgc2NlbmVuYW1lcyA9IE9iamVjdC5rZXlzKGxpc3RbZGlybmFtZV0pO1xuICAgICAgICAgICAgICAgIHNjZW5lbmFtZXMuc29ydCgpO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBzY2VuZW5hbWVzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfbmFtZSA9IHNjZW5lbmFtZXNbal07XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBsaXN0W2Rpcm5hbWVdW19uYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9pdGVtID0gdGhpcy5jcmVhdGVJdGVtKDIwMCwgeSwgX25hbWUsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVtLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAxMjA7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVtLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICAgICAgICAgIHkgLT0gNTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IE1hdGguYWJzKHkpICsgMzA7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiY2MuX1JGcHVzaChtb2R1bGUsICdhZTZmY1I4Y3VGR1JZSFc1MjVWSkQvaycsICdTaGVlcEFuaW1hdGlvbjEnKTtcbi8vIGNhc2VzXFwwM19nYW1lcGxheVxcMDNfYW5pbWF0aW9uXFxTaGVlcEFuaW1hdGlvbjEuanNcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzaGVlcEFuaW06IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQW5pbWF0aW9uXG4gICAgICAgIH0sXG5cbiAgICAgICAgYWxhbWlBbmltOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkFuaW1hdGlvblxuICAgICAgICB9XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIGFuaW0gPSB0aGlzLnNoZWVwQW5pbTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhbmltLnBsYXkoJ3NoZWVwX2p1bXAnKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7fSxcblxuICAgIG9uQnRuQ2xpY2tlZDogZnVuY3Rpb24gb25CdG5DbGlja2VkKCkge1xuICAgICAgICB2YXIgYWxhbWkgPSB0aGlzLmFsYW1pQW5pbTtcbiAgICAgICAgYWxhbWkucGxheShcImFsYW1pX3RhbGtpbmdcIik7XG4gICAgfVxuXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiY2MuX1JGcHVzaChtb2R1bGUsICdiNjA2N2ExK0o1Rlc0RzMwbm1WTFUvZCcsICdTaW1wbGVBY3Rpb24nKTtcbi8vIGNhc2VzXFwwM19nYW1lcGxheVxcMDJfYWN0aW9uc1xcU2ltcGxlQWN0aW9uLmpzXG5cblwidXNlIHN0cmljdFwiO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAganVtcGVyOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5zcXVhc2hBY3Rpb24gPSBjYy5zY2FsZVRvKDAuMiwgMSwgMC42KTtcbiAgICAgICAgdGhpcy5zdHJldGNoQWN0aW9uID0gY2Muc2NhbGVUbygwLjIsIDEsIDEuMik7XG4gICAgICAgIHRoaXMuc2NhbGVCYWNrQWN0aW9uID0gY2Muc2NhbGVUbygwLjEsIDEsIDEpO1xuICAgICAgICB0aGlzLm1vdmVVcEFjdGlvbiA9IGNjLm1vdmVCeSgxLCBjYy5wKDAsIDIwMCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7XG4gICAgICAgIHRoaXMubW92ZURvd25BY3Rpb24gPSBjYy5tb3ZlQnkoMSwgY2MucCgwLCAtMjAwKSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbkluKCkpO1xuICAgICAgICB2YXIgc2VxID0gY2Muc2VxdWVuY2UodGhpcy5zcXVhc2hBY3Rpb24sIHRoaXMuc3RyZXRjaEFjdGlvbiwgdGhpcy5tb3ZlVXBBY3Rpb24sIHRoaXMuc2NhbGVCYWNrQWN0aW9uLCB0aGlzLm1vdmVEb3duQWN0aW9uLCB0aGlzLnNxdWFzaEFjdGlvbiwgdGhpcy5zY2FsZUJhY2tBY3Rpb24pO1xuICAgICAgICAvLyB0aGlzIGlzIGEgdGVtcCBhcGkgd2hpY2ggd2lsbCBiZSBjb21iaW5lZCB0byBjYy5Ob2RlXG4gICAgICAgIHRoaXMuanVtcGVyLnJ1bkFjdGlvbihzZXEpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge31cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJ2MzZjk3MWl5Q2RJaDZ4ZGFPNDlYUDBGJywgJ1NpbXBsZUtleWJvYXJkTW92ZW1lbnQnKTtcbi8vIGNhc2VzXFwwM19nYW1lcGxheVxcMDFfcGxheWVyX2NvbnRyb2xcXFNpbXBsZUtleWJvYXJkTW92ZW1lbnQuanNcblxuJ3VzZSBzdHJpY3QnO1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNoZWVwOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBzZXQgaW5pdGlhbCBtb3ZlIGRpcmVjdGlvblxuICAgICAgICBzZWxmLnR1cm5SaWdodCgpO1xuXG4gICAgICAgIC8vYWRkIGtleWJvYXJkIGlucHV0IGxpc3RlbmVyIHRvIGNhbGwgdHVybkxlZnQgYW5kIHR1cm5SaWdodFxuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuS0VZQk9BUkQsXG4gICAgICAgICAgICBvbktleVByZXNzZWQ6IGZ1bmN0aW9uIG9uS2V5UHJlc3NlZChrZXlDb2RlLCBldmVudCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5hOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLktFWS5sZWZ0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3R1cm4gbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50dXJuTGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLmQ6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuS0VZLnJpZ2h0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3R1cm4gcmlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudHVyblJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNlbGYubm9kZSk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMuc2hlZXAueCArPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgfSxcblxuICAgIHR1cm5MZWZ0OiBmdW5jdGlvbiB0dXJuTGVmdCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IC0xMDA7XG4gICAgICAgIHRoaXMuc2hlZXAuc2NhbGVYID0gMTtcbiAgICB9LFxuXG4gICAgdHVyblJpZ2h0OiBmdW5jdGlvbiB0dXJuUmlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMDA7XG4gICAgICAgIHRoaXMuc2hlZXAuc2NhbGVYID0gLTE7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnOTBhZWQ4Nlh1MURab2FldkZkY3RoWTMnLCAnU3ByaXRlRm9sbG93VG91Y2gnKTtcbi8vIGNhc2VzXFwwM19nYW1lcGxheVxcMDFfcGxheWVyX2NvbnRyb2xcXFNwcml0ZUZvbGxvd1RvdWNoLmpzXG5cbid1c2Ugc3RyaWN0JztcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0b3VjaExvY2F0aW9uRGlzcGxheToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgZm9sbG93ZXI6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgZm9sbG93U3BlZWQ6IDBcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5tb3ZlVG9Qb3MgPSBjYy5wKDAsIDApO1xuICAgICAgICBzZWxmLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgIGNjLmV2ZW50TWFuYWdlci5hZGRMaXN0ZW5lcih7XG4gICAgICAgICAgICBldmVudDogY2MuRXZlbnRMaXN0ZW5lci5UT1VDSF9PTkVfQllfT05FLFxuICAgICAgICAgICAgb25Ub3VjaEJlZ2FuOiBmdW5jdGlvbiBvblRvdWNoQmVnYW4odG91Y2gsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoTG9jID0gdG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgICAgICBzZWxmLmlzTW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWxmLm1vdmVUb1BvcyA9IHNlbGYuZm9sbG93ZXIucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoTG9jKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gZG9uJ3QgY2FwdHVyZSBldmVudFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlZDogZnVuY3Rpb24gb25Ub3VjaE1vdmVkKHRvdWNoLCBldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciB0b3VjaExvYyA9IHRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgc2VsZi50b3VjaExvY2F0aW9uRGlzcGxheS5zdHJpbmcgPSAndG91Y2ggKCcgKyBNYXRoLmZsb29yKHRvdWNoTG9jLngpICsgJywgJyArIE1hdGguZmxvb3IodG91Y2hMb2MueSkgKyAnKSc7XG4gICAgICAgICAgICAgICAgc2VsZi5tb3ZlVG9Qb3MgPSBzZWxmLmZvbGxvd2VyLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaExvYyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Ub3VjaEVuZGVkOiBmdW5jdGlvbiBvblRvdWNoRW5kZWQodG91Y2gsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pc01vdmluZyA9IGZhbHNlOyAvLyB3aGVuIHRvdWNoIGVuZGVkLCBzdG9wIG1vdmluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNNb3ZpbmcpIHJldHVybjtcbiAgICAgICAgdmFyIG9sZFBvcyA9IHRoaXMuZm9sbG93ZXIucG9zaXRpb247XG4gICAgICAgIC8vIGdldCBtb3ZlIGRpcmVjdGlvblxuICAgICAgICB2YXIgZGlyZWN0aW9uID0gY2MucE5vcm1hbGl6ZShjYy5wU3ViKHRoaXMubW92ZVRvUG9zLCBvbGRQb3MpKTtcbiAgICAgICAgLy8gbXVsdGlwbHkgZGlyZWN0aW9uIHdpdGggZGlzdGFuY2UgdG8gZ2V0IG5ldyBwb3NpdGlvblxuICAgICAgICB2YXIgbmV3UG9zID0gY2MucEFkZChvbGRQb3MsIGNjLnBNdWx0KGRpcmVjdGlvbiwgdGhpcy5mb2xsb3dTcGVlZCAqIGR0KSk7XG4gICAgICAgIC8vIHNldCBuZXcgcG9zaXRpb25cbiAgICAgICAgdGhpcy5mb2xsb3dlci5zZXRQb3NpdGlvbihuZXdQb3MpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJzk1MDIxWDVLanhQMzY5T09OZTMxNnNIJywgJ1RvdWNoRHJhZ2dlcicpO1xuLy8gY2FzZXNcXDA1X3NjcmlwdGluZ1xcMDNfZXZlbnRzXFxUb3VjaERyYWdnZXIuanNcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBUb3VjaERyYWdnZXIgPSBjYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcHJvcGFnYXRlOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyAuLi5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAxNjA7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB9LCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBldmVudC50b3VjaC5nZXREZWx0YSgpO1xuICAgICAgICAgICAgdGhpcy54ICs9IGRlbHRhLng7XG4gICAgICAgICAgICB0aGlzLnkgKz0gZGVsdGEueTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldENvbXBvbmVudChUb3VjaERyYWdnZXIpLnByb3BhZ2F0ZSkgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0sIHRoaXMubm9kZSk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IDE2MDtcbiAgICAgICAgfSwgdGhpcy5ub2RlKTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiY2MuX1JGcHVzaChtb2R1bGUsICdhMTRiZmFEK2dSSktyVFZqS3dpdGM1MycsICdUb3VjaEV2ZW50Jyk7XG4vLyBjYXNlc1xcMDVfc2NyaXB0aW5nXFwwM19ldmVudHNcXFRvdWNoRXZlbnQuanNcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgX2NhbGxiYWNrOiBudWxsLFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMTAwO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAxMDA7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAxMDA7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJ2Q5YmY2YkZiK3RGNzc5c3RMRW1qelRWJywgJ1ZhbHVlVHlwZVByb3BlcnRpZXMnKTtcbi8vIGNhc2VzXFwwNV9zY3JpcHRpbmdcXDAxX3Byb3BlcnRpZXNcXFZhbHVlVHlwZVByb3BlcnRpZXMuanNcblxuJ3VzZSBzdHJpY3QnO1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIG51bWJlclxuICAgICAgICBteU51bWJlcjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiAwLFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHN0cmluZ1xuICAgICAgICBteVN0cmluZzoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnZGVmYXVsdCB0ZXh0JyxcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICBteVZlYzI6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogY2MuVmVjMi5aRVJPLFxuICAgICAgICAgICAgdHlwZTogY2MuVmVjMlxuICAgICAgICB9LFxuICAgICAgICBteUNvbG9yOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IGNjLkNvbG9yLldISVRFLFxuICAgICAgICAgICAgdHlwZTogY2MuQ29sb3JcbiAgICAgICAgfSxcbiAgICAgICAgbXlPdGhlck51bWJlcjogMCxcbiAgICAgICAgbXlPdGhlclN0cmluZzogJ25vIHR5cGUgZGVmaW5pdGlvbicsXG4gICAgICAgIG15T3RoZXJWZWMyOiBjYy5WZWMyLk9ORSxcbiAgICAgICAgbXlPdGhlckNvbG9yOiBjYy5Db2xvci5CTEFDS1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHt9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiY2MuX1JGcHVzaChtb2R1bGUsICc5MzBkZUlteG9aSWtwNnVnak1VNVVMVycsICdzY2hlZHVsZUNhbGxiYWNrcycpO1xuLy8gY2FzZXNcXDA1X3NjcmlwdGluZ1xcMDRfc2NoZWR1bGVyXFxzY2hlZHVsZUNhbGxiYWNrcy5qc1xuXG4ndXNlIHN0cmljdCc7XG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGltZToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiA1XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2NhbGxiYWNrOiBmdW5jdGlvbiBfY2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5zZXEpO1xuICAgICAgICBpZiAodGhpcy5yZXBlYXQpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb3VudGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZSA9IDU7XG4gICAgICAgIHRoaXMuY291bnRlci5zdHJpbmcgPSB0aGlzLnRpbWUudG9GaXhlZCgyKSArICcgcyc7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgc3F1YXNoQWN0aW9uID0gY2Muc2NhbGVUbygwLjIsIDEsIDAuNik7XG4gICAgICAgIHZhciBzdHJldGNoQWN0aW9uID0gY2Muc2NhbGVUbygwLjIsIDEsIDEuMik7XG4gICAgICAgIHZhciBzY2FsZUJhY2tBY3Rpb24gPSBjYy5zY2FsZVRvKDAuMSwgMSwgMSk7XG4gICAgICAgIHZhciBtb3ZlVXBBY3Rpb24gPSBjYy5tb3ZlQnkoMSwgY2MucCgwLCAxMDApKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkpO1xuICAgICAgICB2YXIgbW92ZURvd25BY3Rpb24gPSBjYy5tb3ZlQnkoMSwgY2MucCgwLCAtMTAwKSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbkluKCkpO1xuICAgICAgICB0aGlzLnNlcSA9IGNjLnNlcXVlbmNlKHNxdWFzaEFjdGlvbiwgc3RyZXRjaEFjdGlvbiwgbW92ZVVwQWN0aW9uLCBzY2FsZUJhY2tBY3Rpb24sIG1vdmVEb3duQWN0aW9uLCBzcXVhc2hBY3Rpb24sIHNjYWxlQmFja0FjdGlvbik7XG5cbiAgICAgICAgdGhpcy5jb3VudGVyID0gY2MuZmluZCgnQ2FudmFzL2NvdW50X2xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5jb3VudGVyLnN0cmluZyA9IHRoaXMudGltZS50b0ZpeGVkKDIpICsgJyBzJztcbiAgICAgICAgdGhpcy5jb3VudGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlcGVhdCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5jb3VudGluZykge1xuICAgICAgICAgICAgdGhpcy50aW1lIC09IGR0O1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyLnN0cmluZyA9IHRoaXMudGltZS50b0ZpeGVkKDIpICsgJyBzJztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wQ291bnRpbmc6IGZ1bmN0aW9uIHN0b3BDb3VudGluZygpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX2NhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5jb3VudGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvdW50ZXIuc3RyaW5nID0gJzUuMDAgcyc7XG4gICAgICAgIHRoaXMudGltZSA9IDU7XG4gICAgfSxcblxuICAgIHJlcGVhdFNjaGVkdWxlOiBmdW5jdGlvbiByZXBlYXRTY2hlZHVsZSgpIHtcbiAgICAgICAgdGhpcy5zdG9wQ291bnRpbmcoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLl9jYWxsYmFjaywgNSk7XG4gICAgICAgIHRoaXMucmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb3VudGluZyA9IHRydWU7XG4gICAgfSxcblxuICAgIG9uZVNjaGVkdWxlOiBmdW5jdGlvbiBvbmVTY2hlZHVsZSgpIHtcbiAgICAgICAgdGhpcy5zdG9wQ291bnRpbmcoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5fY2FsbGJhY2ssIDUpO1xuICAgICAgICB0aGlzLnJlcGVhdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvdW50aW5nID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgY2FuY2VsU2NoZWR1bGVzOiBmdW5jdGlvbiBjYW5jZWxTY2hlZHVsZXMoKSB7XG4gICAgICAgIHRoaXMucmVwZWF0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RvcENvdW50aW5nKCk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==
