/**
 * Created by pbli on 8/26/16.
 */
module.exports = {
    src_folders: ['./tests'],
    output_folder: './results',
    custom_assertions_path: '',
    globals_path: '',
    live_output: true,

    selenium: {
        start_process: true,
        server_path: '../node_modules/selenium-server/lib/runner/selenium-server-standalone-2.53.1.jar',
        log_path: './results',
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': '../node_modules/.bin/chromedriver'
        }
    },

    test_settings: {
        default: {
            launch_url: 'http://localhost',
            selenium_host: '127.0.0.1',
            selenium_port: 4444,
            silent: false,
            disable_colors: false,
            screenshots: {
                enabled: true,
                path: './results/screenshots'
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: false
            }
        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true
            }
        },

        phantom: {
            desiredCapabilities: {
                browserName: 'phantomjs',
                'phantomjs.binary.path': require('phantomjs').path,
                javascriptEnabled: true
            }
        }
    }
};