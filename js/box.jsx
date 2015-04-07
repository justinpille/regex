var Box = React.createClass({
  render: function() {
    var cells = [];
    for (var i = 0; i < l1.challenge.length; i++) {
      cells.push(<Cell val={l1.challenge[i].val} disabled={l1.challenge[i].mode=="active" ? false : true} />);
    }
    return (
      <div className="box">
        {cells}
      </div>
    );
  }
});
var Cell = React.createClass({
  render: function() {
    return (
        <textarea disabled={this.props.disabled}>{this.props.val}</textarea>
    );
  }
});
React.render(
  <Box />,
  document.getElementById('box')
);
