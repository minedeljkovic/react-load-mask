'use strict';

var React  = require('react')
var assign = require('object-assign')
var Loader = require('./Loader')

module.exports = React.createClass({

    displayName: 'LoadMask',

    getDefaultProps: function(){

        return {
            visibleDisplayValue: 'block',
            defaultStyle: {
                position: 'absolute',
                width   : '100%',
                height  : '100%',
                display : 'none',
                top: 0,
                left: 0
            }
        }
    },

    render: function(){
        var props = assign({}, this.props)

        this.prepareStyle(props)

        props.className = props.className || ''
        props.className += ' loadmask'

        return React.DOM.div(props, React.createElement(Loader, {size: props.size}))
    },

    prepareStyle: function(props){

        var style = {}

        assign(style, props.defaultStyle)
        assign(style, props.style)

        style.display = props.visible?
                        props.visibleDisplayValue:
                        'none'

        props.style = style
    }
})