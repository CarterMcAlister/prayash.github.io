import React from 'react';
import ReactDOM from 'react-dom';
import { RouteHandler, Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import '../css/emblem.scss';
import aboutPic from '../../static/img/about.png';
import musicPic from '../../static/img/music.jpg';
import workPic from '../../static/img/work.jpg';
import blogPic from '../../static/img/blog.jpg';

class Emblem extends React.Component {

  fadeIn() {
    var elem = ReactDOM.findDOMNode(this);
  	elem.style.opacity = 0;
    if (window) {
      window.requestAnimationFrame(function() {
    		elem.style.transition = "opacity 750ms";
    		elem.style.opacity = 1;
    	});
    }
  }

  componentDidMount() {
  	this.fadeIn();
  }

  render() {
    let svgEmblem = (
      <svg id="main" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="500px" height="500px" viewBox="0 0 500 500" enableBackground="new 0 0 500 500">
        <defs>
          <pattern preserveAspectRatio="xMidYMid" x="0" y="0" id="aboutFill" width="100%" height="100%" patternUnits="userSpaceOnUse">
            <image xlinkHref={prefixLink(`${aboutPic}`)} width="100%" height="55%"></image>
          </pattern>

          <pattern preserveAspectRatio="xMidYMid" x="50%" y="100" id="musicFill" width="100%" height="50%" patternUnits="userSpaceOnUse">
            <image xlinkHref={prefixLink(`${musicPic}`)} width="40%" height="78%"></image>
          </pattern>

          <pattern preserveAspectRatio="xMidYMid" x="0" y="-10%" id="workFill" width="100%" height="50%" patternUnits="userSpaceOnUse">
            <image xlinkHref={prefixLink(`${workPic}`)} width="75%" height="60%"></image>
          </pattern>

          <pattern preserveAspectRatio="xMidYMid" x="-3%" y="5%" id="blogFill" width="100%" height="50%" patternUnits="userSpaceOnUse">
            <image xlinkHref={prefixLink(`${blogPic}`)} width="70%" height="60%"></image>
          </pattern>
        </defs>

        <a xlinkHref="http://youtube.com/iameffulgence" target="_blank">
          <path id="youtube" className="cover" d="M293.02,446.521c0-5.717-0.07-11.434,0.028-17.146c0.05-2.834-0.866-4.287-3.96-4.265
            c-11.701,0.086-23.406,0.062-35.109,0.021c-2.541-0.009-3.737,1.021-3.729,3.632c0.042,11.839,0.042,23.68,0,35.519
            c-0.009,2.61,1.189,3.639,3.73,3.631c11.703-0.041,23.406-0.064,35.109,0.021c3.094,0.022,4.008-1.434,3.958-4.266
            C292.948,457.952,293.02,452.235,293.02,446.521z" />
        </a>
        <a xlinkHref="http://twitter.com/iameffulgence" target="_blank">
          <path id="twitter" className="cover" d="M338.667,400.948c0,5.579-0.088,11.159,0.035,16.733c0.067,3.071-1.02,4.46-4.248,4.433
            c-11.429-0.103-22.859-0.086-34.289-0.011c-2.967,0.021-4.133-1.193-4.112-4.139c0.074-11.43,0.092-22.859-0.011-34.289
            c-0.028-3.253,1.411-4.248,4.456-4.224c11.292,0.09,22.587,0.097,33.879-0.001c3.161-0.028,4.398,1.213,4.327,4.354
            C338.576,389.518,338.668,395.232,338.667,400.948z" />
        </a>
        <a xlinkHref="http://soundcloud.com/effulgence" target="_blank">
          <path id="soundcloud" className="cover" d="M271.218,422.141c-5.571,0-11.145-0.069-16.715,0.029c-2.839,0.051-4.275-0.895-4.254-3.97
            c0.083-11.687,0.061-23.373,0.022-35.062c-0.009-2.543,1.043-3.728,3.641-3.719c11.822,0.039,23.646,0.04,35.469,0.001
            c2.611-0.009,3.629,1.21,3.62,3.739c-0.038,11.688-0.062,23.374,0.021,35.061c0.022,3.094-1.453,3.994-4.272,3.948
            C282.906,422.074,277.062,422.141,271.218,422.141z" />
        </a>
        <a xlinkHref="http://facebook.com/iameffulgence" target="_blank">
          <path id="facebook" className="cover" d="M362.829,376.408c-5.573,0.001-11.149-0.092-16.72,0.037c-3.081,0.07-4.432-1.03-4.4-4.252
            c0.105-11.416,0.104-22.836,0-34.254c-0.028-3.176,1.233-4.324,4.355-4.297c11.417,0.101,22.835,0.086,34.253,0.01
            c2.896-0.021,4.207,1.021,4.187,4.039c-0.079,11.554-0.078,23.107,0.002,34.66c0.02,2.979-1.209,4.14-4.144,4.084
            C374.52,376.331,368.673,376.404,362.829,376.408z" />
        </a>
        <a xlinkHref="http://medium.com/@effulgence" target="_blank">
          <path id="blog" className="cover" d="M338.745,355.443c-0.002,5.574-0.104,11.152,0.037,16.726c0.081,3.194-1.258,4.312-4.368,4.284
            c-11.422-0.1-22.844-0.086-34.266-0.008c-2.91,0.019-4.193-1.049-4.174-4.055c0.08-11.559,0.079-23.117,0-34.674
            c-0.021-2.992,1.23-4.093,4.154-4.072c11.421,0.078,22.846,0.113,34.266-0.021c3.486-0.04,4.475,1.483,4.393,4.687
            C338.642,344.02,338.747,349.732,338.745,355.443z" />
        </a>
        <a xlinkHref="http://behance.net/effulgence" target="_blank">
          <path id="behance" className="cover" d="M292.979,355.25c-0.002,5.58-0.092,11.16,0.033,16.736c0.068,3.059-0.984,4.467-4.23,4.438
            c-11.43-0.105-22.86-0.105-34.29,0c-3.248,0.029-4.256-1.383-4.231-4.438c0.093-11.295,0.118-22.59-0.012-33.883
            c-0.039-3.444,1.41-4.479,4.65-4.444c11.158,0.112,22.319,0.144,33.477-0.013c3.645-0.051,4.761,1.438,4.652,4.867
            C292.854,344.087,292.979,349.671,292.979,355.25z" />
        </a>

        <Link to={prefixLink('/about/')} activeClassName="current" onlyActiveOnIndex>
          <path id="about" fill="url(#aboutFill)" className="cover" d="M378.533,5.24c0.673-0.855,2.3-1.417,3.42-1.317c0.866,0.077,1.855,1.269,2.354,2.2
            c0.406,0.757,0.208,1.861,0.208,2.812c-0.001,78.257-0.03,156.516,0.044,234.772c0.006,3.821-1.077,5.278-5.072,5.266
            c-41.373-0.119-82.746-0.125-124.12-0.046c-3.654,0.006-5.051-1.101-5.045-4.895c0.088-48.724,0.251-97.448-0.116-146.169
            c-0.072-9.501,0.735-17.564,9.597-23.125L378.533,5.24z" />
        </Link>

        <Link to={prefixLink('/work/')} activeClassName="current" onlyActiveOnIndex>
          <path id="work" fill="url(#workFill)" className="cover" d="M247.323,489.883c0,1.463-0.141,2.927-0.291,5.826c-4.047-3.169-7.095-5.556-10.14-7.943
            c-19.886-15.598-39.799-31.164-59.65-46.806c-13.658-10.763-27.21-21.662-40.863-32.431c-2.539-2.002-3.736-4.244-3.731-7.61
            c0.099-59.317,0.082-118.635,0.107-177.951c0.003-5.397,0.143-5.512,5.474-5.514c34.546-0.013,69.093-0.017,103.64-0.015
            c5.231,0.001,5.517,0.513,5.383,5.546L247.323,489.883z" />
        </Link>

        <Link to={prefixLink('/blog/')} activeClassName="current" onlyActiveOnIndex>
          <path id="video" fill="url(#blogFill)" className="cover" d="M155.681,213.902c-28.708,0-57.415,0.001-86.123,0c-5.327,0-5.502-0.148-5.505-5.49
            c-0.013-30.75-0.016-61.499-0.01-92.249c0.001-5.316,0.157-5.48,5.529-5.482c57.417-0.019,114.834-0.028,172.252-0.028
            c5.344,0,5.492,0.15,5.493,5.512c0.009,30.75,0.005,61.499-0.009,92.247c-0.003,5.351-0.159,5.507-5.502,5.51
            c-28.709,0.013-57.417,0.005-86.125,0.005C155.681,213.92,155.681,213.912,155.681,213.902z" />
        </Link>

        <Link to={prefixLink('/music/')} activeClassName="current" onlyActiveOnIndex>
          <path id="musica" fill="url(#musicFill)" className="cover" d="M256.307,330.646c-5.912,0-5.966-0.07-5.974-5.869c-0.007-6.123-0.038-12.245,0.006-18.367l-0.023-17.579
            c0.013-10.339,0.161-20.681,0.017-31.019c-0.052-3.715,1.272-4.987,4.991-4.982c56.325,0.068,112.65,0.033,168.978,0.021
            c2.585,0,5.171,0.058,7.754-0.037c2.801-0.104,3.925,1.199,3.871,3.933l0.047,69.373c0.041,3.362-1.241,4.612-4.566,4.522
            L256.307,330.646z" />
        </Link>
      </svg>
    )

    return (
      <div id='emblemContainer'>
        { svgEmblem }
      </div>
    );
  }
}

Emblem.propTypes = {
  route: React.PropTypes.object
}

export default Emblem
