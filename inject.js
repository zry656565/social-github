/**
 * Author: Jerry Zou
 * Email: jerry.zry@outlook.com
 */

var $ = document.querySelectorAll.bind(document)
  , $username = document.querySelector('.vcard-username');

if ($username) {
  var username = $username.textContent
    , $selfUsername = document.querySelector('.dropdown-menu-content .css-truncate-target')
    , selfUsername = $selfUsername && $selfUsername.textContent;

  console.log('He/She:', username, 'Me:', selfUsername);
}