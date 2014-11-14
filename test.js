jsx.register('test', {
  renderer: function(JSX) {
    return JSX.tag('div', { 'cui:control': 'tested' }, [
      'zzZzzzZ -- ',
      this.props.text,
      ' 123'
    ]);
  }
});