import { useState } from "react";
import { Check, Code2, GitFork, Cpu, Eye } from "lucide-react";

const codeSnippets = {
    graph: {
        language: "yaml",
        file: "auth.yaml",
        title: "The DAG Topology",
        desc: "Defines the pipeline. Inputs flow cleanly through nodes, explicitly mapping dependencies like passing auth data directly to the storage driver.",
        code: `inputs: []
outputs:
  secrets_path: auth_write.secrets_path
nodes:
  auth:
    provider: hexmod-backup.auth:login
    inputs:
      redirect_uri: https://tryhexbox.com/callback
    outputs:
      - access_token
      - refresh_token
  auth_write:
    provider: hexmod-backup.auth:write
    inputs:
      refresh_token: auth.refresh_token
    outputs:
      - secrets_path
`
    },
    node: {
        language: "python",
        file: "auth.py",
        title: "Deterministic Execution",
        desc: "The functional core of a DAG node. Python executes side-effect free tasks, cleanly consuming explicitly mapped inputs and returning strongly-typed outputs.",
        code: `def get_access_token(params: Params) -> dict[str, str]:
    client_id = params.inputs.get("client_id")
    client_secret = params.inputs.get("client_secret")
    refresh_token = params.inputs.get("refresh_token")

    response = requests.post(
        "https://oauth2.googleapis.com/token",
        data={
            "client_id": client_id,
            "client_secret": client_secret,
            "refresh_token": refresh_token,
            "grant_type": "refresh_token",
        },
    )
    response.raise_for_status()
    access_token = response.json().get("access_token")

    return { "access_token": access_token }
`
    },
    view: {
        language: "yaml",
        file: "run.yaml",
        title: "Reactive UI Layer",
        desc: "A declarative view driven natively by the state of your background DAG execution. UI elements block, reveal, or dispatch graphs dynamically.",
        code: `title: "Run Backup"
description: Back up your Google Drive locally.
top_level: true
effects:
  - graph: hexmod-backup.show_token
layout:
  - type: label
    text: Let's verify your Google Drive login.
  - type: container
    visible_when: 
      path: "hexmod-backup.show_token:token_status"
      is: "active"
    children:
      - type: button
        text: "Authorize"
        on_click:
          graph:
            id: hexmod-backup.auth
            inputs: {}
`
    },
};

export default function YamlPreview() {
    const [activeTab, setActiveTab] = useState<keyof typeof codeSnippets>("graph");

    return (
        <section className="py-24 bg-slate-950 px-6" id="Architecture">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
                        Pipeline <span className="text-blue-500">Determinism.</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                        HexBox processes applications as deterministic, auditable graphs.
                        Click through the layers to see how topologies, actions, and reactive UI mesh together.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {(Object.keys(codeSnippets) as Array<keyof typeof codeSnippets>).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-widest transition-all ${activeTab === tab
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                                : "bg-slate-900 text-slate-500 hover:text-slate-300 border border-slate-800"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Editor Column */}
                    <div className="lg:col-span-3 bg-[#0d1117] p-8 border-r border-slate-800 min-h-[400px]">
                        <div className="flex items-center gap-2 mb-6 text-slate-500 text-xs uppercase tracking-widest font-mono">
                            <Code2 className="w-4 h-4 text-blue-500" />
                            {codeSnippets[activeTab].file}
                        </div>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300 overflow-x-auto">
                            <code>
                                {codeSnippets[activeTab].code.split('\n').map((line, i) => (
                                    <div key={i} className="flex gap-4">
                                        <span className="text-slate-700 w-4 text-right select-none">{i + 1}</span>
                                        <span>
                                            {codeSnippets[activeTab].language === 'python' ? (
                                                // Python Syntax Emulation
                                                line.trim().startsWith('#') ? (
                                                    <span className="text-emerald-500/80 italic">{line}</span>
                                                ) : (
                                                    line.split(/(\s+|\.|\(|\)|:|"|')/).map((part, j) => {
                                                        if (['def', 'import', 'return', 'from'].includes(part)) {
                                                            return <span key={j} className="text-purple-400">{part}</span>;
                                                        }
                                                        if (['requests', 'post', 'get', 'raise_for_status', 'json'].includes(part)) {
                                                            return <span key={j} className="text-yellow-400">{part}</span>;
                                                        }
                                                        if (part.startsWith('"') || part.startsWith("'") || ['Params', 'dict', 'str'].includes(part)) {
                                                            return <span key={j} className="text-emerald-400">{part}</span>;
                                                        }
                                                        return <span key={j} className="text-slate-300">{part}</span>;
                                                    })
                                                )
                                            ) : (
                                                // YAML Syntax Emulation
                                                <span>
                                                    <span className="text-blue-400">{line.split(':')[0]}</span>
                                                    {line.includes(':') && <span className="text-emerald-400">:{line.substring(line.indexOf(':') + 1)}</span>}
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                ))}
                            </code>
                        </pre>
                    </div>

                    {/* Context Column */}
                    <div className="lg:col-span-2 bg-slate-900/80 p-8 flex flex-col justify-center">
                        <div className="space-y-6">
                            <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                    {activeTab === 'graph' && <GitFork className="w-4 h-4 text-blue-400" />}
                                    {activeTab === 'node' && <Cpu className="w-4 h-4 text-blue-400" />}
                                    {activeTab === 'view' && <Eye className="w-4 h-4 text-blue-400" />}
                                    {codeSnippets[activeTab].title}
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {codeSnippets[activeTab].desc}
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                                    <Check className="w-3 h-3 text-emerald-500" />
                                    Acyclic Dependency Graph
                                </div>
                                <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                                    <Check className="w-3 h-3 text-emerald-500" />
                                    Isolated Execution Nodes
                                </div>
                                <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                                    <Check className="w-3 h-3 text-emerald-500" />
                                    Reactive UI Dataflow
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
