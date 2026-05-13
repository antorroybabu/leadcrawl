import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import Blog from "@/pages/Blog";
import ForStartups from "@/pages/ForStartups";
import Contacts from "@/pages/Contacts";
import Changelog from "@/pages/Changelog";
import Api from "@/pages/Api";
import Playground from "@/pages/Playground";
import Status from "@/pages/Status";
import Docs from "@/pages/Docs";
import Integrations from "@/pages/Integrations";
import Compare from "@/pages/Compare";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/blog" component={Blog} />
      <Route path="/startups" component={ForStartups} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/changelog" component={Changelog} />
      <Route path="/api" component={Api} />
      <Route path="/playground" component={Playground} />
      <Route path="/status" component={Status} />
      <Route path="/docs" component={Docs} />
      <Route path="/integrations" component={Integrations} />
      <Route path="/compare" component={Compare} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;