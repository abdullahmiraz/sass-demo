"use client";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Unified Ummah+. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
