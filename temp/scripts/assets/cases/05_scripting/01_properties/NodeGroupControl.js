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