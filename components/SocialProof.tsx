export function SocialProof() {
  const companies = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLabs", logo: "IL" },
    { name: "FutureWorks", logo: "FW" },
    { name: "CloudTech", logo: "CT" },
    { name: "DataFlow", logo: "DF" },
    { name: "NextGen", logo: "NG" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-muted-foreground">
            Trusted by innovative companies worldwide
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center"
              >
                <div className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {company.logo}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">10k+</div>
            <div className="text-sm text-muted-foreground">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">50+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
