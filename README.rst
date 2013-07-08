=============
yokozuna-demo
=============

yokozuna-demo is a demo application for `riak-yokozuna <https://github.com/basho/yokozuna>`_ 0.7.0. It's prepared for `Riak Meetup Tokyo #2 <http://connpass.com/event/2656/>`_ to search and review the results easily through the Web UI.

How to use
==========
Clone this repository and into it. ::

  $ git clone https://github.com/yosisa/yokozuna-demo.git
  $ cd yokozuna-demo

This app includes a static web/reverse proxy server created using Node.
You can install dependencies by npm. ::

  $ npm install

Then, you can start the server. If you'd like to make the server listen on port 8383 and riak yokozuna hosted on 192.168.1.10:10018, for example, you can start the server like below command. ::

  $ node proxy.js 8383 192.168.1.10:10018

Open http://localhost:8383/ on your browser and enjoy it.

License
=======
The MIT License (MIT) ::

  Copyright (c) 2013 Yoshihisa Tanaka

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
