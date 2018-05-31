import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';
import CommentList from '../../src/components/comment_list';

// Use describe to group together similar tests
// App here is just the string can pu anything
// Use 'it' to test a single attribute of a target
// Create an instance of App
// Use 'expect' to make an 'assertion' about a target
describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });

  it('show a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('show a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });

});
