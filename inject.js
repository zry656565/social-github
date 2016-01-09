/**
 * Author: Jerry Zou
 * Email: jerry.zry@outlook.com
 */

var $ = document.querySelector.bind(document)
  , $username = $('.vcard-username');

if ($username) {
  var username = $username.textContent
    , $selfUsername = $('.dropdown-menu-content .css-truncate-target')
    , selfUsername = $selfUsername && $selfUsername.textContent;

  console.log('He/She:', username, 'Me:', selfUsername);

  var requestUrl;

  if (username !== selfUsername) {
    requestUrl = substitute('https://api.github.com/users/${username}/following/${target_user}', {
      username: username,
      target_user: selfUsername
    });
    ajax(requestUrl, function(response, status) {
      console.log(username + ' follows you.');
    }, function(status, message) {
      if (status == 404) console.log(username + ' doesn\'t follow you.');
      else console.log('Error:', status, message);
    })
  }
}

function substitute(template, replaceMap) {
  var result = template;
  for (var key in replaceMap) {
    if (replaceMap.hasOwnProperty(key)) {
      var regExp = new RegExp('\\$\\{' + key +'\\}', 'g');
      result = result.replace(regExp, replaceMap[key]);
    }
  }
  return result;
}

function ajax(url, success, failure) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(e) {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        success(xhr.response, xhr.status);
      } else {
        failure(xhr.status, xhr.statusText);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}