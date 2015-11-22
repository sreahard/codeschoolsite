var React = require('react')

var GRAVATAR_URL = "http://gravatar.com/avatar/"

var Gravatar = React.createClass({
	render: function() {

		var userData = this.props.data.map(function(user){
 			
 			if (user.local != undefined) {

			var hash = md5(user.local.email);
			var size = 60;
			var genericAvatar = 'https://mtcodeschoolsr.herokuapp.com/images/dog2.jpg';

			var url = GRAVATAR_URL + hash + "?s=" + size + "&d=" + genericAvatar;
			
			return (
			<div className="containerBlog">
        	<div className="row">
        	<img className="img-circle-sm" src={url}/>
        	<p  key={user._id}><strong>{user.local.email}</strong></p>
        	<p  key={user._id}>{user.local.email}</p>
        	<hr/>
        	</div>
        	</div>
				)
			}
		});
		return (
			<ul>
			{userData}
			</ul>
			)
	}
})


module.exports = Gravatar;