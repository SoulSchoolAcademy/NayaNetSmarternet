"use client";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";
import Badge from "../../../components/ui/Badge";
import { Tabs } from "../../../components/ui/Tabs";
import Avatar from "../../../components/ui/Avatar";

export default function StyleGuide(){
  return (
    <section className="grid gap-6">
      <h1 className="text-3xl font-extrabold">SmartNet Style Guide</h1>

      {/* Buttons */}
      <Card>
        <div className="font-bold mb-3">Buttons</div>
        <div className="flex flex-wrap gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="lg">Large</Button>
          <Button size="sm">Small</Button>
        </div>
      </Card>

      {/* Inputs */}
      <Card>
        <div className="font-bold mb-3">Inputs</div>
        <div className="grid sm:grid-cols-3 gap-3">
          <Input placeholder="Text input" />
          <Input as="textarea" rows={3} placeholder="Textarea" />
          <Input as="select">
            <option>Option A</option><option>Option B</option>
          </Input>
        </div>
      </Card>

      {/* Badges + Avatars */}
      <Card>
        <div className="font-bold mb-3">Badges & Avatars</div>
        <div className="flex items-center gap-3">
          <Badge>Default</Badge>
          <Badge tone="success">Success</Badge>
          <Badge tone="warning">Warning</Badge>
          <Badge tone="danger">Danger</Badge>
          <Avatar />
          <Avatar size={56} />
        </div>
      </Card>

      {/* Tabs */}
      <Card>
        <div className="font-bold mb-3">Tabs</div>
        <Tabs tabs={["Overview","Posts","Media"]}>
          <div className="text-[color:var(--muted)]">Overview content…</div>
          <div className="text-[color:var(--muted)]">Posts content…</div>
          <div className="text-[color:var(--muted)]">Media content…</div>
        </Tabs>
      </Card>

      {/* Page shells */}
      <Card>
        <div className="font-bold mb-3">Page Shells</div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <div className="font-semibold mb-2">Creator Page (header)</div>
            <div className="rounded-2xl overflow-hidden border border-[color:var(--border)]">
              <div className="h-32 bg-gradient-to-r from-[#121a31] to-[#1a2240]" />
              <div className="p-4 flex items-center gap-3 -mt-8">
                <Avatar size={72} />
                <div>
                  <div className="text-xl font-extrabold">SoulSchool Academy</div>
                  <div className="text-sm text-[color:var(--muted)]">Education • Community</div>
                </div>
                <div className="flex-1" />
                <Button>Follow</Button>
              </div>
            </div>
          </div>

          <div>
            <div className="font-semibold mb-2">Group (header)</div>
            <div className="rounded-2xl overflow-hidden border border-[color:var(--border)]">
              <div className="h-32 bg-gradient-to-r from-[#0f1423] to-[#222d55]" />
              <div className="p-4 flex items-center gap-3 -mt-8">
                <Avatar size={72} />
                <div>
                  <div className="text-xl font-extrabold">Kelowna Creators</div>
                  <div className="text-sm text-[color:var(--muted)]">842 members • Public</div>
                </div>
                <div className="flex-1" />
                <Button variant="secondary">Join</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

    </section>
  );
}
