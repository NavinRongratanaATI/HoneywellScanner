#import <Cordova/CDVPlugin.h>
#import "Captuvo.h"

//------------------------------------------------------------------------------
// plugin definition
//------------------------------------------------------------------------------
@interface CDVHoneywellScanner : CDVPlugin {}
- (void)trigger:(CDVInvokedUrlCommand*)command;
@end

//------------------------------------------------------------------------------
// plugin internals
//------------------------------------------------------------------------------
@implementation CDVHoneywellScanner

- (void)pluginInitialize {
    //[super pluginInitialize];
    [self prompt:@"pluginInitialize"];
    //[[Captuvo sharedCaptuvoDevice]startDecoderHardware];
}

- (void)dispose {
    //[[Captuvo sharedCaptuvoDevice]stopDecoderHardware];
    [super dispose];
}

//--------------------------------------------------------------------------
- (void)scan:(CDVInvokedUrlCommand*)command {
    [self prompt:@"start scanning"];
    //[[Captuvo sharedCaptuvoDevice]startDecoderScanning];
    [self prompt:@"scanning started"];
}

- (void)prompt:(NSString*) message {
    UIAlertView* alert = [[UIAlertView alloc] initWithTitle:@"Honeywell Scanner"
                                                    message:message
                                                   delegate:nil
                                          cancelButtonTitle:@"OK"
                                          otherButtonTitles:nil];
    [alert show];
}

@end

