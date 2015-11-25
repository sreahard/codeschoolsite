var React = require('react');
var ReactDOM = require('react-dom');

var BlogHeader = React.createClass({
    render: function() {
        
        var divImage = {
                  backgroundImage: 'url("images/hp_header1.jpg")',
            };

        return (
                <div className="intro-header" style={divImage}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="site-heading">

                                    <h1>I Code Good</h1>
                                    <hr className="small"/>
                                    <span className="subheading">and Do Other Stuff Good Too!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
                )
    }
})

module.exports = BlogHeader;