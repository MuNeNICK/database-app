import Container from './container'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="p-4 bg-white sm:p-6">
            <Container>
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 360 360"
                                preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,360.000000) scale(0.100000,-0.100000)"
                                    fill="#000000" stroke="none">
                                    <path d="M1670 3155 c-7 -8 -19 -15 -26 -15 -8 0 -14 -4 -14 -10 0 -5 -9 -10
-20 -10 -11 0 -20 -4 -20 -10 0 -5 -8 -10 -18 -10 -10 0 -24 -9 -32 -20 -8
-11 -22 -20 -32 -20 -10 0 -18 -4 -18 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4
-20 -10 0 -5 -6 -10 -13 -10 -7 0 -23 -9 -35 -20 -12 -11 -28 -20 -37 -20 -8
0 -15 -4 -15 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -8 0 -5 -16 -14 -35
-22 -19 -8 -35 -17 -35 -22 0 -4 -9 -8 -20 -8 -11 0 -20 -4 -20 -10 0 -5 -6
-10 -13 -10 -7 0 -23 -9 -35 -20 -12 -11 -28 -20 -37 -20 -8 0 -15 -4 -15 -10
0 -5 -9 -10 -19 -10 -11 0 -21 -3 -23 -7 -4 -10 -57 -42 -80 -50 -10 -3 -18
-9 -18 -14 0 -5 -9 -9 -20 -9 -11 0 -20 -4 -20 -9 0 -5 -13 -14 -29 -21 -16
-6 -32 -18 -35 -26 -3 -8 -15 -14 -26 -14 -11 0 -20 -4 -20 -10 0 -5 -9 -10
-20 -10 -11 0 -20 -4 -20 -10 0 -5 -7 -10 -15 -10 -8 0 -15 -4 -15 -10 0 -5
-7 -10 -15 -10 -8 0 -15 -4 -15 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -10
0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -10 0 -5 -7 -10 -16 -10 -8 0 -12 -4 -9
-10 3 -5 -1 -10 -10 -10 -46 0 -45 15 -45 -745 0 -753 0 -745 42 -745 8 0 20
-9 28 -20 8 -11 22 -20 31 -20 10 0 19 -3 21 -7 4 -10 57 -42 81 -50 9 -3 17
-9 17 -14 0 -5 9 -9 20 -9 11 0 20 -4 20 -10 0 -5 7 -10 15 -10 8 0 15 -4 15
-10 0 -5 7 -10 15 -10 9 0 25 -9 37 -20 12 -11 28 -20 35 -20 7 0 13 -4 13
-10 0 -5 7 -10 16 -10 9 0 24 -8 33 -17 19 -21 49 -41 74 -49 9 -4 17 -10 17
-14 0 -4 14 -13 30 -20 17 -7 30 -16 30 -21 0 -5 9 -9 20 -9 11 0 20 -4 20
-10 0 -5 18 -10 40 -10 22 0 40 4 40 9 0 5 14 14 30 21 17 7 30 16 30 21 0 5
7 9 15 9 20 0 106 56 98 64 -3 3 3 6 15 6 12 0 22 5 22 10 0 6 9 10 20 10 11
0 20 5 20 10 0 6 7 10 15 10 9 0 25 9 37 20 12 11 28 20 35 20 7 0 13 5 13 10
0 6 9 10 20 10 11 0 20 5 20 10 0 6 8 10 18 10 10 0 24 9 32 20 8 11 22 20 32
20 10 0 18 5 18 10 0 6 9 10 20 10 11 0 20 4 20 8 0 5 16 14 35 22 19 8 35 17
35 22 0 4 9 8 20 8 11 0 20 5 20 10 0 6 6 10 13 10 7 0 23 9 35 20 12 11 28
20 37 20 8 0 15 5 15 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 6 10 13 10 7 0
23 9 35 20 12 11 28 20 37 20 8 0 15 3 15 8 0 4 19 16 41 27 23 11 47 27 53
37 6 10 19 18 28 18 10 0 18 5 18 10 0 6 6 10 13 10 18 0 67 24 67 33 0 4 7 7
15 7 8 0 15 5 15 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 9 10 20 10 19 0 20 7
20 265 l0 265 -205 0 -205 0 0 -144 0 -144 -30 -14 c-16 -7 -30 -16 -30 -20 0
-5 -9 -8 -20 -8 -11 0 -20 -4 -20 -10 0 -5 -8 -10 -18 -10 -10 0 -24 -9 -32
-20 -8 -11 -22 -20 -32 -20 -10 0 -18 -4 -18 -10 0 -5 -9 -10 -20 -10 -11 0
-20 -3 -20 -8 0 -4 -15 -13 -32 -21 -18 -8 -35 -17 -38 -20 -3 -4 -26 -17 -52
-30 -27 -13 -48 -28 -48 -33 0 -4 -9 -8 -20 -8 -11 0 -20 -3 -20 -7 0 -5 -23
-19 -50 -32 -28 -14 -50 -29 -50 -33 0 -4 -7 -8 -15 -8 -9 0 -18 -7 -21 -15
-4 -8 -15 -15 -25 -15 -10 0 -19 -4 -19 -10 0 -5 -6 -10 -13 -10 -7 0 -23 -9
-35 -20 -12 -11 -28 -20 -37 -20 -8 0 -15 -4 -15 -10 0 -5 -9 -10 -20 -10 -11
0 -20 -3 -20 -8 0 -12 -55 -32 -82 -30 -15 1 -24 6 -22 10 3 4 -2 8 -10 8 -9
0 -16 5 -16 10 0 6 -7 10 -15 10 -9 0 -25 9 -37 20 -12 11 -28 20 -35 20 -7 0
-13 5 -13 10 0 6 -9 10 -20 10 -11 0 -20 3 -20 8 0 4 -14 16 -30 27 l-30 20 0
498 c0 490 0 497 20 497 11 0 20 4 20 9 0 5 8 11 18 14 23 8 76 40 80 50 2 4
12 7 23 7 10 0 19 5 19 10 0 6 6 10 13 10 7 0 23 9 35 20 12 11 28 20 37 20 8
0 15 5 15 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 6 10 13 10 7 0 23 9 35 20
12 11 26 20 31 20 6 0 26 9 44 19 19 11 45 25 58 33 13 7 26 15 29 18 3 3 26
17 53 30 26 14 47 28 47 32 0 5 7 8 15 8 9 0 18 7 21 15 4 8 15 15 25 15 10 0
19 5 19 10 0 6 8 10 18 10 10 0 24 9 32 20 8 11 22 20 32 20 10 0 18 5 18 10
0 6 9 10 20 10 11 0 20 5 20 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 5 10 11
10 17 0 39 27 39 49 0 19 -16 57 -30 71 -3 3 -14 21 -24 40 -11 19 -28 44 -38
54 -10 11 -18 26 -18 33 0 7 -4 13 -10 13 -5 0 -10 9 -10 20 0 11 -4 20 -10
20 -5 0 -10 7 -10 15 0 21 -31 55 -51 55 -9 0 -22 -7 -29 -15z"/>
                                    <path d="M2350 2850 c0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -8 0 -5 -37 -28
-82 -51 -46 -24 -85 -46 -88 -50 -3 -3 -22 -15 -42 -26 -21 -11 -38 -23 -38
-27 0 -5 -8 -8 -18 -8 -10 0 -24 -9 -32 -20 -8 -11 -22 -20 -32 -20 -10 0 -18
-4 -18 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -10 0 -5 -6 -10 -13 -10 -7
0 -23 -9 -35 -20 -12 -11 -28 -20 -37 -20 -8 0 -15 -4 -15 -10 0 -5 -9 -10
-20 -10 -11 0 -20 -4 -20 -10 0 -5 -7 -10 -15 -10 -8 0 -15 -4 -15 -10 0 -5
-9 -10 -20 -10 -11 0 -20 -4 -20 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20
-10 0 -5 -6 -10 -13 -10 -7 0 -23 -9 -35 -20 -12 -11 -28 -20 -37 -20 -8 0
-15 -4 -15 -10 0 -5 -8 -10 -18 -10 -10 0 -24 -9 -32 -20 -8 -11 -22 -20 -32
-20 -10 0 -18 -4 -18 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -9 0 -5 -8
-11 -17 -14 -18 -6 -73 -37 -83 -47 -3 -3 -22 -14 -42 -24 -21 -11 -38 -23
-38 -28 0 -4 -7 -8 -15 -8 -8 0 -15 -4 -15 -10 0 -5 -9 -10 -20 -10 -11 0 -20
-4 -20 -10 0 -5 -9 -10 -20 -10 -19 0 -20 -7 -20 -265 l0 -265 205 0 205 0 0
141 c0 145 6 169 44 169 9 0 16 5 16 10 0 6 7 10 15 10 9 0 25 9 37 20 12 11
28 20 35 20 7 0 13 5 13 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 9 10 20 10 11
0 20 4 20 9 0 5 24 20 53 35 56 28 109 58 117 66 3 3 22 14 43 25 20 11 37 23
37 27 0 5 6 8 13 8 7 0 23 9 35 20 12 11 28 20 37 20 8 0 15 5 15 10 0 6 7 10
15 10 9 0 25 9 37 20 12 11 28 20 35 20 7 0 13 5 13 10 0 6 9 10 20 10 11 0
20 5 20 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 7 10 15 10 8 0 15 5 15 10 0
18 65 11 88 -10 12 -11 28 -20 37 -20 8 0 15 -4 15 -10 0 -5 6 -10 13 -10 7 0
23 -9 35 -20 12 -11 28 -20 37 -20 8 0 15 -3 15 -8 0 -4 14 -13 30 -20 l30
-14 0 -500 c0 -491 0 -500 -20 -505 -11 -3 -20 -9 -20 -14 0 -5 -9 -9 -20 -9
-11 0 -20 -4 -20 -10 0 -5 -6 -10 -13 -10 -7 0 -23 -9 -35 -20 -12 -11 -28
-20 -37 -20 -8 0 -15 -4 -15 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -10 0
-5 -6 -10 -13 -10 -7 0 -23 -9 -35 -20 -12 -11 -28 -20 -37 -20 -8 0 -15 -4
-15 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -10 0 -5 -7 -10 -15 -10 -8 0
-15 -4 -15 -10 0 -5 -9 -10 -19 -10 -11 0 -21 -3 -23 -7 -1 -5 -24 -19 -50
-32 -27 -13 -48 -28 -48 -33 0 -4 -9 -8 -20 -8 -11 0 -20 -4 -20 -10 0 -5 -9
-10 -20 -10 -11 0 -20 -4 -20 -9 0 -5 -13 -14 -30 -21 -16 -7 -30 -16 -30 -21
0 -5 -9 -9 -20 -9 -11 0 -20 -4 -20 -9 0 -5 -8 -12 -19 -16 -16 -5 -31 -16
-78 -55 -7 -5 -19 -10 -28 -10 -8 0 -15 -4 -15 -10 0 -5 -9 -10 -20 -10 -11 0
-20 -3 -20 -8 0 -4 -10 -12 -22 -17 -23 -10 -38 -62 -21 -74 4 -3 19 -28 32
-54 14 -26 35 -59 48 -73 13 -14 23 -32 23 -40 0 -7 5 -14 10 -14 6 0 10 -7
10 -15 0 -9 9 -25 20 -37 11 -12 20 -28 20 -35 0 -8 12 -13 30 -13 17 0 30 5
30 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 6
10 13 10 7 0 23 9 35 20 12 11 28 20 37 20 8 0 15 5 15 10 0 6 7 10 15 10 9 0
25 9 37 20 12 11 28 20 35 20 7 0 13 5 13 10 0 6 9 10 20 10 11 0 20 5 20 10
0 6 9 10 20 10 11 0 20 5 20 10 0 6 7 10 15 10 8 0 15 5 15 10 0 6 9 10 20 10
11 0 20 4 20 9 0 5 8 11 18 14 23 8 76 40 80 50 2 4 12 7 23 7 10 0 19 4 19 9
0 5 8 11 18 14 9 3 30 14 47 24 29 18 38 24 69 51 8 6 20 12 26 12 6 0 20 9
32 20 12 11 28 20 35 20 7 0 13 5 13 10 0 6 6 10 13 10 18 0 67 24 67 33 0 4
7 7 15 7 8 0 15 5 15 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 9 10 20 10 11 0
20 5 20 10 0 6 6 10 13 10 7 0 23 9 35 20 12 11 26 20 32 20 40 0 40 -2 40
745 0 560 -3 719 -12 728 -7 7 -25 18 -40 26 -16 8 -28 18 -28 23 0 4 -9 8
-20 8 -11 0 -20 5 -20 10 0 6 -9 10 -21 10 -11 0 -17 5 -14 10 3 6 -1 10 -9
10 -9 0 -16 5 -16 10 0 6 -9 10 -20 10 -11 0 -20 5 -20 10 0 6 -7 10 -15 10
-8 0 -15 3 -15 8 0 7 -48 32 -62 32 -5 0 -20 10 -33 23 -40 37 -54 47 -65 47
-6 0 -20 9 -32 20 -12 11 -28 20 -35 20 -7 0 -13 5 -13 10 0 6 -7 10 -15 10
-9 0 -25 9 -37 20 -12 11 -28 20 -35 20 -7 0 -13 5 -13 10 0 6 -9 10 -20 10
-11 0 -20 5 -20 10 0 6 -18 10 -40 10 -22 0 -40 -4 -40 -10z"/>
                                </g>
                            </svg>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">threaDBlog</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Contents</h2>
                            <ul className="text-gray-600">
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/thread" className="hover:underline">Thread</Link>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-600">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline ">Github</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Discord</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-600">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-900 sm:text-center">© 2022 <Link href="/" className="hover:underline">MuNeNiCK</Link>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <Link href="#" className="text-gray-500 hover:text-gray-900">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-gray-900">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
