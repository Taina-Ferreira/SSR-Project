module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RXBc");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./src/components/Mostrar-usuario/index.js




const MostrarUsuario = ({
  user
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "row justify-content-center",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: user.avatar_url,
        width: "200",
        style: {
          borderRadius: "50%"
        }
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "row justify-content-center",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        children: user.name
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "row justify-content-center",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: user.html_url,
        target: "_blank",
        children: "GitHub"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "row justify-content-center",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: user.bio
      })
    })]
  });
};

/* harmony default export */ var Mostrar_usuario = (MostrarUsuario);
// CONCATENATED MODULE: ./src/components/Mostrar-Repos/index.js




const MostrarRepos = ({
  repos
}) => {
  const formatarData = str => {
    const data = new Date(str);
    return data.toLocaleDateString("pt");
  };

  const listRepos = repos.map((repo, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "card",
    style: {
      width: "18rem"
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "card-body",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
        className: "card-title",
        children: repo.name
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h6", {
        className: "card-subtitle mb-2 text-muted",
        children: ["Linguagem: ", repo.language]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        className: "card-text",
        children: ["Criado em: ", formatarData(repo.created_at)]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: repo.html_url,
        target: "_blank",
        className: "card-link",
        children: "Acessar reposit\xF3rio"
      })]
    })
  }, index));
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "card-columns",
    children: listRepos
  });
};

/* harmony default export */ var Mostrar_Repos = (MostrarRepos);
// CONCATENATED MODULE: ./src/services/github.js
const githubUser = async () => {
  const res = await fetch('https://api.github.com/users/Taina-Ferreira');
  const usuario = await res.json();
  return usuario;
};

const githubRepositorio = async () => {
  const res = await fetch('https://api.github.com/users/Taina-Ferreira/repos');
  const repositorio = await res.json();
  return repositorio;
};


// CONCATENATED MODULE: ./src/pages/index.js





/* 
  Pagina ultiliza SSR.
*/

function HomePage(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Mostrar_usuario, {
      user: props.user
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Mostrar_Repos, {
      repos: props.repos
    })]
  });
}

const getStaticProps = async () => {
  const user = await githubUser();
  const repos = await githubRepositorio();
  return {
    props: {
      user,
      repos
    }
  };
};
/* harmony default export */ var pages = __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });