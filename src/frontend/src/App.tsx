import { AlertCircle, Globe, Smartphone, Code2, Database, Cloud } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function App() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'platform-mismatch'
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/20">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Platform Capabilities</h1>
              <p className="text-xs text-muted-foreground">Web Application Platform</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Alert */}
          <Alert className="border-2">
            <AlertCircle className="h-5 w-5" />
            <AlertTitle className="text-lg font-semibold">Platform Capability Mismatch</AlertTitle>
            <AlertDescription className="mt-2 text-base">
              Your request is for an <strong>Android browser APK</strong>, but this platform builds{' '}
              <strong>web applications</strong> using React and Motoko on the Internet Computer. We cannot
              create native mobile apps, browser engines, or APK files.
            </AlertDescription>
          </Alert>

          {/* What This Platform Does */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                What This Platform Builds
              </CardTitle>
              <CardDescription>
                We specialize in decentralized web applications on the Internet Computer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="default">Frontend</Badge>
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>React + TypeScript applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Responsive web interfaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Progressive Web Apps (PWAs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Modern UI components</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Backend</Badge>
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Motoko smart contracts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Decentralized data storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Internet Identity authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>On-chain computation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What We Cannot Build */}
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-destructive" />
                What We Cannot Build
              </CardTitle>
              <CardDescription>Technical limitations of this platform</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">✗</span>
                  <span>
                    <strong>Android APKs or iOS apps</strong> - No native mobile app compilation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">✗</span>
                  <span>
                    <strong>Browser engines</strong> - Cannot create Chromium-based or custom browsers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">✗</span>
                  <span>
                    <strong>System-level features</strong> - No access to OS sandboxing, VPN config, or
                    background services
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">✗</span>
                  <span>
                    <strong>Browser extensions</strong> - Cannot create Tampermonkey scripts or extension
                    marketplaces
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">✗</span>
                  <span>
                    <strong>Native download managers</strong> - No system-level file management
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Separator />

          {/* Alternative Suggestions */}
          <Card className="border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5 text-primary" />
                What We Could Build Instead
              </CardTitle>
              <CardDescription>Web-based alternatives that might help</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                While we can't create a native browser, we could build web applications such as:
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-4 space-y-2">
                  <h4 className="font-semibold text-sm">Cookie Manager</h4>
                  <p className="text-xs text-muted-foreground">
                    A web tool to view, export, and manage browser cookies for testing and development
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4 space-y-2">
                  <h4 className="font-semibold text-sm">Session Organizer</h4>
                  <p className="text-xs text-muted-foreground">
                    Manage and organize browser sessions, bookmarks, and testing profiles
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4 space-y-2">
                  <h4 className="font-semibold text-sm">Privacy Dashboard</h4>
                  <p className="text-xs text-muted-foreground">
                    Track and analyze web privacy settings, fingerprinting, and tracking protection
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4 space-y-2">
                  <h4 className="font-semibold text-sm">Proxy Configurator</h4>
                  <p className="text-xs text-muted-foreground">
                    Generate and manage proxy configurations for different testing scenarios
                  </p>
                </div>
              </div>
              <Alert>
                <AlertDescription className="text-sm">
                  <strong>Interested in a web-based tool?</strong> Let me know which type of application would
                  be most useful, and I'll build it for you!
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* For Native Browser Development */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">For Native Browser Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>If you need to build an actual Android browser, consider these approaches:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">1.</span>
                  <span>
                    <strong>Fork existing browsers:</strong> Start with open-source projects like Chromium,
                    Bromite, or Via Browser
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">2.</span>
                  <span>
                    <strong>Use WebView:</strong> Build an Android app wrapper around Android WebView with
                    custom features
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">3.</span>
                  <span>
                    <strong>Native development:</strong> Use Android Studio with Java/Kotlin for full control
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t bg-card/30 backdrop-blur-sm mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Platform Capabilities Guide</p>
            <p>
              Built with love using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
