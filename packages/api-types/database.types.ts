export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      account_deletion_requests: {
        Row: {
          handled_at: string | null
          handled_by: string | null
          id: string
          note: string | null
          profile_id: string
          reason: string | null
          requested_at: string
          status: string
        }
        Insert: {
          handled_at?: string | null
          handled_by?: string | null
          id?: string
          note?: string | null
          profile_id: string
          reason?: string | null
          requested_at?: string
          status?: string
        }
        Update: {
          handled_at?: string | null
          handled_by?: string | null
          id?: string
          note?: string | null
          profile_id?: string
          reason?: string | null
          requested_at?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "account_deletion_requests_handled_by_fkey"
            columns: ["handled_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "account_deletion_requests_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      advertising_campaigns: {
        Row: {
          bemerkung: string | null
          bis: string | null
          budget_gesamt: number | null
          business_id: string
          created_at: string
          created_by: string | null
          deleted_at: string | null
          id: string
          name: string
          status:
            | "draft"
            | "pending_review"
            | "approved"
            | "active"
            | "paused"
            | "completed"
            | "cancelled"
          updated_at: string
          updated_by: string | null
          von: string
          welt: "analog" | "digital" | "komplett"
          ziel_url: string | null
        }
        Insert: {
          bemerkung?: string | null
          bis?: string | null
          budget_gesamt?: number | null
          business_id: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          name: string
          status?:
            | "draft"
            | "pending_review"
            | "approved"
            | "active"
            | "paused"
            | "completed"
            | "cancelled"
          updated_at?: string
          updated_by?: string | null
          von: string
          welt: "analog" | "digital" | "komplett"
          ziel_url?: string | null
        }
        Update: {
          bemerkung?: string | null
          bis?: string | null
          budget_gesamt?: number | null
          business_id?: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          name?: string
          status?:
            | "draft"
            | "pending_review"
            | "approved"
            | "active"
            | "paused"
            | "completed"
            | "cancelled"
          updated_at?: string
          updated_by?: string | null
          von?: string
          welt?: "analog" | "digital" | "komplett"
          ziel_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "advertising_campaigns_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advertising_campaigns_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advertising_campaigns_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      advertising_coupon_sponsorships: {
        Row: {
          anlass:
            | "tagesangebot"
            | "geburtstag"
            | "meilenstein"
            | "jahrestag"
            | "persoenliches_angebot"
          bis: string
          campaign_id: string
          created_at: string
          created_by: string | null
          deleted_at: string | null
          id: string
          laufzeit: unknown
          status:
            | "entwurf"
            | "zur_unterschrift"
            | "aktiv"
            | "beendet"
            | "gekuendigt"
          updated_at: string
          updated_by: string | null
          von: string
        }
        Insert: {
          anlass:
            | "tagesangebot"
            | "geburtstag"
            | "meilenstein"
            | "jahrestag"
            | "persoenliches_angebot"
          bis: string
          campaign_id: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          laufzeit?: unknown
          status?:
            | "entwurf"
            | "zur_unterschrift"
            | "aktiv"
            | "beendet"
            | "gekuendigt"
          updated_at?: string
          updated_by?: string | null
          von: string
        }
        Update: {
          anlass?:
            | "tagesangebot"
            | "geburtstag"
            | "meilenstein"
            | "jahrestag"
            | "persoenliches_angebot"
          bis?: string
          campaign_id?: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          laufzeit?: unknown
          status?:
            | "entwurf"
            | "zur_unterschrift"
            | "aktiv"
            | "beendet"
            | "gekuendigt"
          updated_at?: string
          updated_by?: string | null
          von?: string
        }
        Relationships: [
          {
            foreignKeyName: "advertising_coupon_sponsorships_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "advertising_campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advertising_coupon_sponsorships_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advertising_coupon_sponsorships_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      advertising_creatives: {
        Row: {
          campaign_id: string
          created_at: string
          created_by: string | null
          deleted_at: string | null
          file_url: string | null
          id: string
          kind:
            | "motiv_flaeche"
            | "aushang"
            | "coupon_logo"
            | "social_post"
            | "news_beitrag"
            | "profil_logo"
          review_note: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          status:
            | "draft"
            | "pending_review"
            | "approved"
            | "rejected"
            | "revision_required"
            | "active"
            | "expired"
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          campaign_id: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          file_url?: string | null
          id?: string
          kind:
            | "motiv_flaeche"
            | "aushang"
            | "coupon_logo"
            | "social_post"
            | "news_beitrag"
            | "profil_logo"
          review_note?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?:
            | "draft"
            | "pending_review"
            | "approved"
            | "rejected"
            | "revision_required"
            | "active"
            | "expired"
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          campaign_id?: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          file_url?: string | null
          id?: string
          kind?:
            | "motiv_flaeche"
            | "aushang"
            | "coupon_logo"
            | "social_post"
            | "news_beitrag"
            | "profil_logo"
          review_note?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?:
            | "draft"
            | "pending_review"
            | "approved"
            | "rejected"
            | "revision_required"
            | "active"
            | "expired"
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "advertising_creatives_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "advertising_campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advertising_creatives_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advertising_creatives_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advertising_creatives_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      advertising_redirect_counts: {
        Row: {
          campaign_id: string
          count: number
          day: string
        }
        Insert: {
          campaign_id: string
          count?: number
          day: string
        }
        Update: {
          campaign_id?: string
          count?: number
          day?: string
        }
        Relationships: [
          {
            foreignKeyName: "advertising_redirect_counts_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "advertising_campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      advertising_space_contracts: {
        Row: {
          bemerkung: string | null
          bis: string | null
          business_id: string
          campaign_id: string | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          id: string
          kuendigungsfrist_tage: number
          laufzeit: unknown
          motiv_beschreibung: string | null
          motiv_freigegeben_am: string | null
          motiv_freigegeben_von: string | null
          preis_monat: number
          space_id: string
          status:
            | "entwurf"
            | "zur_unterschrift"
            | "aktiv"
            | "beendet"
            | "gekuendigt"
          updated_at: string
          updated_by: string | null
          von: string
        }
        Insert: {
          bemerkung?: string | null
          bis?: string | null
          business_id: string
          campaign_id?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          kuendigungsfrist_tage?: number
          laufzeit?: unknown
          motiv_beschreibung?: string | null
          motiv_freigegeben_am?: string | null
          motiv_freigegeben_von?: string | null
          preis_monat: number
          space_id: string
          status?:
            | "entwurf"
            | "zur_unterschrift"
            | "aktiv"
            | "beendet"
            | "gekuendigt"
          updated_at?: string
          updated_by?: string | null
          von: string
        }
        Update: {
          bemerkung?: string | null
          bis?: string | null
          business_id?: string
          campaign_id?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          kuendigungsfrist_tage?: number
          laufzeit?: unknown
          motiv_beschreibung?: string | null
          motiv_freigegeben_am?: string | null
          motiv_freigegeben_von?: string | null
          preis_monat?: number
          space_id?: string
          status?:
            | "entwurf"
            | "zur_unterschrift"
            | "aktiv"
            | "beendet"
            | "gekuendigt"
          updated_at?: string
          updated_by?: string | null
          von?: string
        }
        Relationships: [
          {
            foreignKeyName: "advertising_space_contracts_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advertising_space_contracts_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "advertising_campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advertising_space_contracts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advertising_space_contracts_space_id_fkey"
            columns: ["space_id"]
            isOneToOne: false
            referencedRelation: "advertising_spaces"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advertising_space_contracts_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      advertising_spaces: {
        Row: {
          bemerkung: string | null
          betriebszustand: "nutzbar" | "gesperrt" | "wartung"
          bezeichnung: string | null
          breite_mm: number | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          hoehe_mm: number | null
          id: string
          listenpreis_monat: number
          machine_id: string
          position:
            | "front"
            | "seite_links"
            | "seite_rechts"
            | "oben"
            | "rueckseite"
            | "display"
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          bemerkung?: string | null
          betriebszustand?: "nutzbar" | "gesperrt" | "wartung"
          bezeichnung?: string | null
          breite_mm?: number | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          hoehe_mm?: number | null
          id?: string
          listenpreis_monat?: number
          machine_id: string
          position:
            | "front"
            | "seite_links"
            | "seite_rechts"
            | "oben"
            | "rueckseite"
            | "display"
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          bemerkung?: string | null
          betriebszustand?: "nutzbar" | "gesperrt" | "wartung"
          bezeichnung?: string | null
          breite_mm?: number | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          hoehe_mm?: number | null
          id?: string
          listenpreis_monat?: number
          machine_id?: string
          position?:
            | "front"
            | "seite_links"
            | "seite_rechts"
            | "oben"
            | "rueckseite"
            | "display"
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "advertising_spaces_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advertising_spaces_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advertising_spaces_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_log: {
        Row: {
          action: string
          actor_id: string | null
          id: number
          new_data: Json | null
          occurred_at: string
          old_data: Json | null
          record_id: string | null
          table_name: string
        }
        Insert: {
          action: string
          actor_id?: string | null
          id?: never
          new_data?: Json | null
          occurred_at?: string
          old_data?: Json | null
          record_id?: string | null
          table_name: string
        }
        Update: {
          action?: string
          actor_id?: string | null
          id?: never
          new_data?: Json | null
          occurred_at?: string
          old_data?: Json | null
          record_id?: string | null
          table_name?: string
        }
        Relationships: []
      }
      auth_hook_diagnose: {
        Row: {
          aktion: string | null
          grund: string | null
          id: string
          occurred_at: string
          ok: boolean
          secret_anzahl: number | null
          secret_laenge: number | null
          sig_anzahl: number | null
          ts_versatz: number | null
        }
        Insert: {
          aktion?: string | null
          grund?: string | null
          id?: string
          occurred_at?: string
          ok: boolean
          secret_anzahl?: number | null
          secret_laenge?: number | null
          sig_anzahl?: number | null
          ts_versatz?: number | null
        }
        Update: {
          aktion?: string | null
          grund?: string | null
          id?: string
          occurred_at?: string
          ok?: boolean
          secret_anzahl?: number | null
          secret_laenge?: number | null
          sig_anzahl?: number | null
          ts_versatz?: number | null
        }
        Relationships: []
      }
      badges: {
        Row: {
          code: string
          description: string
          icon_key: string
          sort_order: number
          title: string
        }
        Insert: {
          code: string
          description: string
          icon_key?: string
          sort_order?: number
          title: string
        }
        Update: {
          code?: string
          description?: string
          icon_key?: string
          sort_order?: number
          title?: string
        }
        Relationships: []
      }
      business_budgets: {
        Row: {
          business_id: string
          created_at: string
          created_by: string | null
          deleted_at: string | null
          gueltig_bis: string | null
          gueltig_von: string
          id: string
          monatslimit_brutto: number | null
          profile_id: string | null
          tageslimit_brutto: number | null
          updated_at: string
          updated_by: string | null
          zuschuss_prozent: number
        }
        Insert: {
          business_id: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          gueltig_bis?: string | null
          gueltig_von?: string
          id?: string
          monatslimit_brutto?: number | null
          profile_id?: string | null
          tageslimit_brutto?: number | null
          updated_at?: string
          updated_by?: string | null
          zuschuss_prozent?: number
        }
        Update: {
          business_id?: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          gueltig_bis?: string | null
          gueltig_von?: string
          id?: string
          monatslimit_brutto?: number | null
          profile_id?: string | null
          tageslimit_brutto?: number | null
          updated_at?: string
          updated_by?: string | null
          zuschuss_prozent?: number
        }
        Relationships: [
          {
            foreignKeyName: "business_budgets_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_budgets_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_budgets_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_budgets_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      business_invitations: {
        Row: {
          accepted_at: string | null
          accepted_by: string | null
          business_id: string
          created_at: string
          created_by: string | null
          email: string
          expires_at: string
          id: string
          revoked_at: string | null
          role: "admin" | "member"
          token_hash: string
        }
        Insert: {
          accepted_at?: string | null
          accepted_by?: string | null
          business_id: string
          created_at?: string
          created_by?: string | null
          email: string
          expires_at: string
          id?: string
          revoked_at?: string | null
          role?: "admin" | "member"
          token_hash: string
        }
        Update: {
          accepted_at?: string | null
          accepted_by?: string | null
          business_id?: string
          created_at?: string
          created_by?: string | null
          email?: string
          expires_at?: string
          id?: string
          revoked_at?: string | null
          role?: "admin" | "member"
          token_hash?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_invitations_accepted_by_fkey"
            columns: ["accepted_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_invitations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_invitations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      business_invoice_runs: {
        Row: {
          angefordert_am: string
          angefordert_von: string | null
          brutto: number
          business_id: string
          created_at: string
          fehlertext: string | null
          freigegeben_am: string | null
          freigegeben_von: string | null
          grundlage: Json
          id: string
          jahr: number
          monat: number
          sevdesk_antwort: Json | null
          sevdesk_invoice_id: string | null
          sevdesk_invoice_number: string | null
          status:
            | "angefordert"
            | "in_sevdesk"
            | "freigegeben"
            | "fehler"
            | "storniert"
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          angefordert_am?: string
          angefordert_von?: string | null
          brutto: number
          business_id: string
          created_at?: string
          fehlertext?: string | null
          freigegeben_am?: string | null
          freigegeben_von?: string | null
          grundlage: Json
          id?: string
          jahr: number
          monat: number
          sevdesk_antwort?: Json | null
          sevdesk_invoice_id?: string | null
          sevdesk_invoice_number?: string | null
          status?:
            | "angefordert"
            | "in_sevdesk"
            | "freigegeben"
            | "fehler"
            | "storniert"
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          angefordert_am?: string
          angefordert_von?: string | null
          brutto?: number
          business_id?: string
          created_at?: string
          fehlertext?: string | null
          freigegeben_am?: string | null
          freigegeben_von?: string | null
          grundlage?: Json
          id?: string
          jahr?: number
          monat?: number
          sevdesk_antwort?: Json | null
          sevdesk_invoice_id?: string | null
          sevdesk_invoice_number?: string | null
          status?:
            | "angefordert"
            | "in_sevdesk"
            | "freigegeben"
            | "fehler"
            | "storniert"
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_invoice_runs_angefordert_von_fkey"
            columns: ["angefordert_von"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_invoice_runs_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_invoice_runs_freigegeben_von_fkey"
            columns: ["freigegeben_von"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_invoice_runs_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      business_locations: {
        Row: {
          business_id: string
          created_at: string
          created_by: string | null
          location_id: string
        }
        Insert: {
          business_id: string
          created_at?: string
          created_by?: string | null
          location_id: string
        }
        Update: {
          business_id?: string
          created_at?: string
          created_by?: string | null
          location_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_locations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_locations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_locations_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
        ]
      }
      business_members: {
        Row: {
          activated_at: string | null
          business_id: string
          invited_at: string
          invited_by: string | null
          profile_id: string
          role: "admin" | "member"
          status: "invited" | "active" | "suspended" | "removed"
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          activated_at?: string | null
          business_id: string
          invited_at?: string
          invited_by?: string | null
          profile_id: string
          role?: "admin" | "member"
          status?: "invited" | "active" | "suspended" | "removed"
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          activated_at?: string | null
          business_id?: string
          invited_at?: string
          invited_by?: string | null
          profile_id?: string
          role?: "admin" | "member"
          status?: "invited" | "active" | "suspended" | "removed"
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_members_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_members_invited_by_fkey"
            columns: ["invited_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_members_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_members_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      businesses: {
        Row: {
          archived_at: string | null
          billing_city: string | null
          billing_country: string
          billing_email: string | null
          billing_street: string | null
          billing_zip: string | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          id: string
          legal_form: string | null
          name: string
          sevdesk_contact_id: string | null
          status: "active" | "inactive" | "archived"
          tax_number: string | null
          updated_at: string
          updated_by: string | null
          vat_id: string | null
        }
        Insert: {
          archived_at?: string | null
          billing_city?: string | null
          billing_country?: string
          billing_email?: string | null
          billing_street?: string | null
          billing_zip?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          legal_form?: string | null
          name: string
          sevdesk_contact_id?: string | null
          status?: "active" | "inactive" | "archived"
          tax_number?: string | null
          updated_at?: string
          updated_by?: string | null
          vat_id?: string | null
        }
        Update: {
          archived_at?: string | null
          billing_city?: string | null
          billing_country?: string
          billing_email?: string | null
          billing_street?: string | null
          billing_zip?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          legal_form?: string | null
          name?: string
          sevdesk_contact_id?: string | null
          status?: "active" | "inactive" | "archived"
          tax_number?: string | null
          updated_at?: string
          updated_by?: string | null
          vat_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "businesses_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "businesses_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cancellation_requests: {
        Row: {
          cancel_at: string
          customer_id: string | null
          customer_number: string | null
          email: string
          id: string
          kind: string
          processed_at: string | null
          processed_by: string | null
          reason: string | null
          requested_at: string
          source: string
        }
        Insert: {
          cancel_at?: string
          customer_id?: string | null
          customer_number?: string | null
          email: string
          id?: string
          kind?: string
          processed_at?: string | null
          processed_by?: string | null
          reason?: string | null
          requested_at?: string
          source?: string
        }
        Update: {
          cancel_at?: string
          customer_id?: string | null
          customer_number?: string | null
          email?: string
          id?: string
          kind?: string
          processed_at?: string | null
          processed_by?: string | null
          reason?: string | null
          requested_at?: string
          source?: string
        }
        Relationships: [
          {
            foreignKeyName: "cancellation_requests_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      cash_collection_logs: {
        Row: {
          amount_gross: number
          change_amount: number
          collected_at: string
          created_at: string
          id: string
          machine_id: string
          net_amount: number | null
          recorded_by: string | null
        }
        Insert: {
          amount_gross: number
          change_amount?: number
          collected_at?: string
          created_at?: string
          id?: string
          machine_id: string
          net_amount?: number | null
          recorded_by?: string | null
        }
        Update: {
          amount_gross?: number
          change_amount?: number
          collected_at?: string
          created_at?: string
          id?: string
          machine_id?: string
          net_amount?: number | null
          recorded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cash_collection_logs_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
        ]
      }
      challenges: {
        Row: {
          active: boolean
          code: string
          description: string
          metric: string
          reward_badge: string | null
          reward_points: number | null
          reward_text: string
          sort_order: number
          target: number
          title: string
          window_days: number
        }
        Insert: {
          active?: boolean
          code: string
          description: string
          metric: string
          reward_badge?: string | null
          reward_points?: number | null
          reward_text: string
          sort_order?: number
          target: number
          title: string
          window_days: number
        }
        Update: {
          active?: boolean
          code?: string
          description?: string
          metric?: string
          reward_badge?: string | null
          reward_points?: number | null
          reward_text?: string
          sort_order?: number
          target?: number
          title?: string
          window_days?: number
        }
        Relationships: [
          {
            foreignKeyName: "challenges_reward_badge_fkey"
            columns: ["reward_badge"]
            isOneToOne: false
            referencedRelation: "badges"
            referencedColumns: ["code"]
          },
        ]
      }
      cleaning_logs: {
        Row: {
          agent: string | null
          cleaned_at: string
          cleaning_type: "exterior" | "interior" | "full"
          created_at: string
          id: string
          machine_id: string
          notes: string | null
          photo_path: string | null
          recorded_by: string | null
          signature_path: string | null
        }
        Insert: {
          agent?: string | null
          cleaned_at?: string
          cleaning_type: "exterior" | "interior" | "full"
          created_at?: string
          id?: string
          machine_id: string
          notes?: string | null
          photo_path?: string | null
          recorded_by?: string | null
          signature_path?: string | null
        }
        Update: {
          agent?: string | null
          cleaned_at?: string
          cleaning_type?: "exterior" | "interior" | "full"
          created_at?: string
          id?: string
          machine_id?: string
          notes?: string | null
          photo_path?: string | null
          recorded_by?: string | null
          signature_path?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cleaning_logs_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
        ]
      }
      consents: {
        Row: {
          created_at: string
          granted: boolean
          id: string
          profile_id: string
          type: "privacy" | "analytics" | "marketing" | "maps" | "terms"
          version: string
        }
        Insert: {
          created_at?: string
          granted: boolean
          id?: string
          profile_id: string
          type: "privacy" | "analytics" | "marketing" | "maps" | "terms"
          version?: string
        }
        Update: {
          created_at?: string
          granted?: boolean
          id?: string
          profile_id?: string
          type?: "privacy" | "analytics" | "marketing" | "maps" | "terms"
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "consents_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_messages: {
        Row: {
          body: string
          category:
            | "problem"
            | "question"
            | "praise"
            | "criticism"
            | "suggestion"
          created_at: string
          customer_id: string | null
          id: string
          status: string
          subject: string | null
        }
        Insert: {
          body: string
          category:
            | "problem"
            | "question"
            | "praise"
            | "criticism"
            | "suggestion"
          created_at?: string
          customer_id?: string | null
          id?: string
          status?: string
          subject?: string | null
        }
        Update: {
          body?: string
          category?:
            | "problem"
            | "question"
            | "praise"
            | "criticism"
            | "suggestion"
          created_at?: string
          customer_id?: string | null
          id?: string
          status?: string
          subject?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_messages_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_card: {
        Row: {
          customer_id: string
          issued_at: string
          rotated_at: string | null
          token: string
        }
        Insert: {
          customer_id: string
          issued_at?: string
          rotated_at?: string | null
          token?: string
        }
        Update: {
          customer_id?: string
          issued_at?: string
          rotated_at?: string | null
          token?: string
        }
        Relationships: []
      }
      customer_challenge_awards: {
        Row: {
          awarded_at: string
          challenge_code: string
          customer_id: string
          points: number
        }
        Insert: {
          awarded_at?: string
          challenge_code: string
          customer_id: string
          points: number
        }
        Update: {
          awarded_at?: string
          challenge_code?: string
          customer_id?: string
          points?: number
        }
        Relationships: [
          {
            foreignKeyName: "customer_challenge_awards_challenge_code_fkey"
            columns: ["challenge_code"]
            isOneToOne: false
            referencedRelation: "challenges"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "customer_challenge_awards_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_login_days: {
        Row: {
          customer_id: string
          day: string
          recorded_at: string
        }
        Insert: {
          customer_id: string
          day: string
          recorded_at?: string
        }
        Update: {
          customer_id?: string
          day?: string
          recorded_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_login_days_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_notification_reads: {
        Row: {
          customer_id: string
          key: string
          read_at: string
        }
        Insert: {
          customer_id: string
          key: string
          read_at?: string
        }
        Update: {
          customer_id?: string
          key?: string
          read_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_notification_reads_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_prices: {
        Row: {
          created_at: string
          created_by: string | null
          customer_id: string
          id: string
          price_net: number
          product_id: string
          valid_from: string
          valid_to: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          customer_id: string
          id?: string
          price_net: number
          product_id: string
          valid_from?: string
          valid_to?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          customer_id?: string
          id?: string
          price_net?: number
          product_id?: string
          valid_from?: string
          valid_to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_prices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_prices_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_subscriptions: {
        Row: {
          age_consent: boolean
          billing_label: string
          chosen_at: string
          customer_id: string
          id: string
          plan: "monthly" | "yearly" | "lifetime"
          previous_plan: "monthly" | "yearly" | "lifetime" | null
          price_cents: number
          seq: number
          source: string
          withdrawal_consent: boolean
        }
        Insert: {
          age_consent?: boolean
          billing_label: string
          chosen_at?: string
          customer_id: string
          id?: string
          plan: "monthly" | "yearly" | "lifetime"
          previous_plan?: "monthly" | "yearly" | "lifetime" | null
          price_cents: number
          seq?: never
          source?: string
          withdrawal_consent?: boolean
        }
        Update: {
          age_consent?: boolean
          billing_label?: string
          chosen_at?: string
          customer_id?: string
          id?: string
          plan?: "monthly" | "yearly" | "lifetime"
          previous_plan?: "monthly" | "yearly" | "lifetime" | null
          price_cents?: number
          seq?: never
          source?: string
          withdrawal_consent?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "customer_subscriptions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          billing_city: string | null
          billing_country: string | null
          billing_street: string | null
          billing_zip: string | null
          company_name: string | null
          created_at: string
          customer_number: string | null
          customer_type: "private" | "business"
          id: string
          notify_email: boolean
          notify_push: boolean
          tax_number: string | null
          updated_at: string
          updated_by: string | null
          vat_id: string | null
        }
        Insert: {
          billing_city?: string | null
          billing_country?: string | null
          billing_street?: string | null
          billing_zip?: string | null
          company_name?: string | null
          created_at?: string
          customer_number?: string | null
          customer_type?: "private" | "business"
          id: string
          notify_email?: boolean
          notify_push?: boolean
          tax_number?: string | null
          updated_at?: string
          updated_by?: string | null
          vat_id?: string | null
        }
        Update: {
          billing_city?: string | null
          billing_country?: string | null
          billing_street?: string | null
          billing_zip?: string | null
          company_name?: string | null
          created_at?: string
          customer_number?: string | null
          customer_type?: "private" | "business"
          id?: string
          notify_email?: boolean
          notify_push?: boolean
          tax_number?: string | null
          updated_at?: string
          updated_by?: string | null
          vat_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      device_tokens: {
        Row: {
          created_at: string
          id: string
          last_seen: string
          platform: "android" | "ios" | "web"
          token: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_seen?: string
          platform: "android" | "ios" | "web"
          token: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          last_seen?: string
          platform?: "android" | "ios" | "web"
          token?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "device_tokens_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      disposal_logs: {
        Row: {
          created_at: string
          disposed_at: string
          id: string
          lot_expiry: string | null
          machine_id: string | null
          mhd_date: string | null
          photo_path: string | null
          product_id: string | null
          product_label: string | null
          quantity: number
          reason: "mhd" | "damage" | "hygiene" | "other"
          recorded_by: string | null
        }
        Insert: {
          created_at?: string
          disposed_at?: string
          id?: string
          lot_expiry?: string | null
          machine_id?: string | null
          mhd_date?: string | null
          photo_path?: string | null
          product_id?: string | null
          product_label?: string | null
          quantity: number
          reason: "mhd" | "damage" | "hygiene" | "other"
          recorded_by?: string | null
        }
        Update: {
          created_at?: string
          disposed_at?: string
          id?: string
          lot_expiry?: string | null
          machine_id?: string | null
          mhd_date?: string | null
          photo_path?: string | null
          product_id?: string | null
          product_label?: string | null
          quantity?: number
          reason?: "mhd" | "damage" | "hygiene" | "other"
          recorded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "disposal_logs_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "disposal_logs_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      document_approval_decisions: {
        Row: {
          approval_id: string
          approver_id: string
          comment: string | null
          created_at: string
          decided_at: string | null
          decision: "pending" | "approved" | "rejected"
          id: string
          signature_url: string | null
        }
        Insert: {
          approval_id: string
          approver_id: string
          comment?: string | null
          created_at?: string
          decided_at?: string | null
          decision?: "pending" | "approved" | "rejected"
          id?: string
          signature_url?: string | null
        }
        Update: {
          approval_id?: string
          approver_id?: string
          comment?: string | null
          created_at?: string
          decided_at?: string | null
          decision?: "pending" | "approved" | "rejected"
          id?: string
          signature_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_approval_decisions_approval_id_fkey"
            columns: ["approval_id"]
            isOneToOne: false
            referencedRelation: "document_approvals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_approval_decisions_approver_id_fkey"
            columns: ["approver_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      document_approvals: {
        Row: {
          cancelled_at: string | null
          document_kind:
            | "inventory_fifo"
            | "haccp_temperature"
            | "haccp_cleaning"
            | "haccp_disposal"
            | "haccp_filling"
            | "haccp_maintenance"
            | "haccp_cash"
            | "haccp_training"
            | "finance_period"
            | "document_review"
            | "anlage_pkw"
          draft_pdf_path: string | null
          final_pdf_path: string | null
          finalized_at: string | null
          id: string
          notes: string | null
          period_from: string
          period_to: string
          requested_at: string
          requested_by: string | null
          snapshot: Json
          status: "pending" | "approved" | "rejected"
          title: string
        }
        Insert: {
          cancelled_at?: string | null
          document_kind:
            | "inventory_fifo"
            | "haccp_temperature"
            | "haccp_cleaning"
            | "haccp_disposal"
            | "haccp_filling"
            | "haccp_maintenance"
            | "haccp_cash"
            | "haccp_training"
            | "finance_period"
            | "document_review"
            | "anlage_pkw"
          draft_pdf_path?: string | null
          final_pdf_path?: string | null
          finalized_at?: string | null
          id?: string
          notes?: string | null
          period_from: string
          period_to: string
          requested_at?: string
          requested_by?: string | null
          snapshot: Json
          status?: "pending" | "approved" | "rejected"
          title: string
        }
        Update: {
          cancelled_at?: string | null
          document_kind?:
            | "inventory_fifo"
            | "haccp_temperature"
            | "haccp_cleaning"
            | "haccp_disposal"
            | "haccp_filling"
            | "haccp_maintenance"
            | "haccp_cash"
            | "haccp_training"
            | "finance_period"
            | "document_review"
            | "anlage_pkw"
          draft_pdf_path?: string | null
          final_pdf_path?: string | null
          finalized_at?: string | null
          id?: string
          notes?: string | null
          period_from?: string
          period_to?: string
          requested_at?: string
          requested_by?: string | null
          snapshot?: Json
          status?: "pending" | "approved" | "rejected"
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "document_approvals_requested_by_fkey"
            columns: ["requested_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      document_employee_signatures: {
        Row: {
          document_id: string
          document_version: number
          employee_id: string
          id: string
          invited_at: string
          invited_by: string
          ip_hash: string | null
          signature_png_path: string | null
          signed_at: string | null
          signed_pdf_path: string | null
          status: "pending" | "signed" | "expired" | "cancelled"
        }
        Insert: {
          document_id: string
          document_version: number
          employee_id: string
          id?: string
          invited_at?: string
          invited_by: string
          ip_hash?: string | null
          signature_png_path?: string | null
          signed_at?: string | null
          signed_pdf_path?: string | null
          status?: "pending" | "signed" | "expired" | "cancelled"
        }
        Update: {
          document_id?: string
          document_version?: number
          employee_id?: string
          id?: string
          invited_at?: string
          invited_by?: string
          ip_hash?: string | null
          signature_png_path?: string | null
          signed_at?: string | null
          signed_pdf_path?: string | null
          status?: "pending" | "signed" | "expired" | "cancelled"
        }
        Relationships: [
          {
            foreignKeyName: "document_employee_signatures_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_employee_signatures_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_employee_signatures_invited_by_fkey"
            columns: ["invited_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      document_folders: {
        Row: {
          icon: string | null
          label: string
          slug: string
          sort_order: number
        }
        Insert: {
          icon?: string | null
          label: string
          slug: string
          sort_order: number
        }
        Update: {
          icon?: string | null
          label?: string
          slug?: string
          sort_order?: number
        }
        Relationships: []
      }
      document_versions: {
        Row: {
          created_at: string
          created_by: string | null
          document_id: string
          file_path: string
          id: string
          notes: string | null
          version: number
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          document_id: string
          file_path: string
          id?: string
          notes?: string | null
          version: number
        }
        Update: {
          created_at?: string
          created_by?: string | null
          document_id?: string
          file_path?: string
          id?: string
          notes?: string | null
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "document_versions_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          archived_at: string | null
          category: string | null
          created_at: string
          created_by: string | null
          current_version: number
          id: string
          is_template: boolean
          status: "active" | "inactive" | "archived"
          title: string
          updated_at: string
          updated_by: string | null
          valid_until: string | null
        }
        Insert: {
          archived_at?: string | null
          category?: string | null
          created_at?: string
          created_by?: string | null
          current_version?: number
          id?: string
          is_template?: boolean
          status?: "active" | "inactive" | "archived"
          title: string
          updated_at?: string
          updated_by?: string | null
          valid_until?: string | null
        }
        Update: {
          archived_at?: string | null
          category?: string | null
          created_at?: string
          created_by?: string | null
          current_version?: number
          id?: string
          is_template?: boolean
          status?: "active" | "inactive" | "archived"
          title?: string
          updated_at?: string
          updated_by?: string | null
          valid_until?: string | null
        }
        Relationships: []
      }
      donation_causes: {
        Row: {
          city: string | null
          contact_email: string | null
          country: string
          created_at: string
          deleted_at: string | null
          description: string | null
          id: string
          legal_name: string | null
          purpose: string | null
          receipt_eligible: boolean
          registration_ref: string | null
          status: string
          street: string | null
          suggested_by: string | null
          tax_number: string | null
          tax_office: string | null
          title: string
          verified_at: string | null
          verified_by: string | null
          website: string | null
          zip: string | null
        }
        Insert: {
          city?: string | null
          contact_email?: string | null
          country?: string
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          legal_name?: string | null
          purpose?: string | null
          receipt_eligible?: boolean
          registration_ref?: string | null
          status?: string
          street?: string | null
          suggested_by?: string | null
          tax_number?: string | null
          tax_office?: string | null
          title: string
          verified_at?: string | null
          verified_by?: string | null
          website?: string | null
          zip?: string | null
        }
        Update: {
          city?: string | null
          contact_email?: string | null
          country?: string
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          legal_name?: string | null
          purpose?: string | null
          receipt_eligible?: boolean
          registration_ref?: string | null
          status?: string
          street?: string | null
          suggested_by?: string | null
          tax_number?: string | null
          tax_office?: string | null
          title?: string
          verified_at?: string | null
          verified_by?: string | null
          website?: string | null
          zip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "donation_causes_suggested_by_fkey"
            columns: ["suggested_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "donation_causes_verified_by_fkey"
            columns: ["verified_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      donation_votes: {
        Row: {
          cause_id: string
          created_at: string
          customer_id: string
        }
        Insert: {
          cause_id: string
          created_at?: string
          customer_id: string
        }
        Update: {
          cause_id?: string
          created_at?: string
          customer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "donation_votes_cause_id_fkey"
            columns: ["cause_id"]
            isOneToOne: false
            referencedRelation: "donation_causes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "donation_votes_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      email_consent_event: {
        Row: {
          actor_id: string | null
          granted: boolean
          id: string
          ip: unknown
          occurred_at: string
          profile_id: string
          proof_text: string | null
          source: string
          topic_key: string
          user_agent: string | null
        }
        Insert: {
          actor_id?: string | null
          granted: boolean
          id?: string
          ip?: unknown
          occurred_at?: string
          profile_id: string
          proof_text?: string | null
          source: string
          topic_key: string
          user_agent?: string | null
        }
        Update: {
          actor_id?: string | null
          granted?: boolean
          id?: string
          ip?: unknown
          occurred_at?: string
          profile_id?: string
          proof_text?: string | null
          source?: string
          topic_key?: string
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_consent_event_actor_id_fkey"
            columns: ["actor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_consent_event_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_consent_event_topic_key_fkey"
            columns: ["topic_key"]
            isOneToOne: false
            referencedRelation: "email_topic"
            referencedColumns: ["key"]
          },
        ]
      }
      email_log: {
        Row: {
          created_at: string
          direction: string
          error: string | null
          from_address: string | null
          html: string | null
          id: string
          occurred_at: string
          provider_id: string | null
          raw: Json | null
          status: string
          subject: string | null
          tag: string | null
          text_body: string | null
          to_addresses: string[]
        }
        Insert: {
          created_at?: string
          direction?: string
          error?: string | null
          from_address?: string | null
          html?: string | null
          id?: string
          occurred_at?: string
          provider_id?: string | null
          raw?: Json | null
          status: string
          subject?: string | null
          tag?: string | null
          text_body?: string | null
          to_addresses?: string[]
        }
        Update: {
          created_at?: string
          direction?: string
          error?: string | null
          from_address?: string | null
          html?: string | null
          id?: string
          occurred_at?: string
          provider_id?: string | null
          raw?: Json | null
          status?: string
          subject?: string | null
          tag?: string | null
          text_body?: string | null
          to_addresses?: string[]
        }
        Relationships: []
      }
      email_outbox: {
        Row: {
          attempts: number
          created_at: string
          dedupe_key: string | null
          email_log_id: string | null
          id: string
          last_error: string | null
          profile_id: string | null
          scheduled_for: string
          sent_at: string | null
          status: string
          suppressed_reason: string | null
          template_key: string
          to_address: string
          vars: Json
        }
        Insert: {
          attempts?: number
          created_at?: string
          dedupe_key?: string | null
          email_log_id?: string | null
          id?: string
          last_error?: string | null
          profile_id?: string | null
          scheduled_for?: string
          sent_at?: string | null
          status?: string
          suppressed_reason?: string | null
          template_key: string
          to_address: string
          vars?: Json
        }
        Update: {
          attempts?: number
          created_at?: string
          dedupe_key?: string | null
          email_log_id?: string | null
          id?: string
          last_error?: string | null
          profile_id?: string | null
          scheduled_for?: string
          sent_at?: string | null
          status?: string
          suppressed_reason?: string | null
          template_key?: string
          to_address?: string
          vars?: Json
        }
        Relationships: [
          {
            foreignKeyName: "email_outbox_email_log_id_fkey"
            columns: ["email_log_id"]
            isOneToOne: false
            referencedRelation: "email_log"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_outbox_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_outbox_template_key_fkey"
            columns: ["template_key"]
            isOneToOne: false
            referencedRelation: "email_templates"
            referencedColumns: ["key"]
          },
        ]
      }
      email_report_share: {
        Row: {
          created_at: string
          created_by: string | null
          entry_count: number
          expires_at: string
          id: string
          max_views: number | null
          note: string | null
          payload: Json
          revoked_at: string | null
          token: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          entry_count?: number
          expires_at: string
          id?: string
          max_views?: number | null
          note?: string | null
          payload: Json
          revoked_at?: string | null
          token: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          entry_count?: number
          expires_at?: string
          id?: string
          max_views?: number | null
          note?: string | null
          payload?: Json
          revoked_at?: string | null
          token?: string
        }
        Relationships: []
      }
      email_report_share_access: {
        Row: {
          accessed_at: string
          client_hint: string | null
          id: string
          outcome: string
          referer: string | null
          share_id: string | null
          token: string
          user_agent: string | null
        }
        Insert: {
          accessed_at?: string
          client_hint?: string | null
          id?: string
          outcome: string
          referer?: string | null
          share_id?: string | null
          token: string
          user_agent?: string | null
        }
        Update: {
          accessed_at?: string
          client_hint?: string | null
          id?: string
          outcome?: string
          referer?: string | null
          share_id?: string | null
          token?: string
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_report_share_access_share_id_fkey"
            columns: ["share_id"]
            isOneToOne: false
            referencedRelation: "email_report_share"
            referencedColumns: ["id"]
          },
        ]
      }
      email_templates: {
        Row: {
          body_html: string | null
          body_text: string | null
          category: string
          description: string | null
          is_active: boolean
          key: string
          label: string
          legal_note: string | null
          precondition: string | null
          preheader: string | null
          subject: string | null
          topic_key: string | null
          updated_at: string
          updated_by: string | null
          variables: string[]
        }
        Insert: {
          body_html?: string | null
          body_text?: string | null
          category?: string
          description?: string | null
          is_active?: boolean
          key: string
          label: string
          legal_note?: string | null
          precondition?: string | null
          preheader?: string | null
          subject?: string | null
          topic_key?: string | null
          updated_at?: string
          updated_by?: string | null
          variables?: string[]
        }
        Update: {
          body_html?: string | null
          body_text?: string | null
          category?: string
          description?: string | null
          is_active?: boolean
          key?: string
          label?: string
          legal_note?: string | null
          precondition?: string | null
          preheader?: string | null
          subject?: string | null
          topic_key?: string | null
          updated_at?: string
          updated_by?: string | null
          variables?: string[]
        }
        Relationships: [
          {
            foreignKeyName: "email_templates_topic_key_fkey"
            columns: ["topic_key"]
            isOneToOne: false
            referencedRelation: "email_topic"
            referencedColumns: ["key"]
          },
          {
            foreignKeyName: "email_templates_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      email_test_log: {
        Row: {
          client_entry_id: string
          created_at: string
          created_by: string | null
          detail: string | null
          duration_ms: number | null
          html: string | null
          http_status: number | null
          id: string
          message_id: string | null
          reason: string | null
          recipient: string
          request_id: string | null
          response_body: string | null
          response_headers: Json | null
          sent_at: string
          status: string
          status_text: string | null
          subject: string | null
          template_id: string
          template_label: string | null
          template_values: Json | null
        }
        Insert: {
          client_entry_id: string
          created_at?: string
          created_by?: string | null
          detail?: string | null
          duration_ms?: number | null
          html?: string | null
          http_status?: number | null
          id?: string
          message_id?: string | null
          reason?: string | null
          recipient: string
          request_id?: string | null
          response_body?: string | null
          response_headers?: Json | null
          sent_at: string
          status: string
          status_text?: string | null
          subject?: string | null
          template_id: string
          template_label?: string | null
          template_values?: Json | null
        }
        Update: {
          client_entry_id?: string
          created_at?: string
          created_by?: string | null
          detail?: string | null
          duration_ms?: number | null
          html?: string | null
          http_status?: number | null
          id?: string
          message_id?: string | null
          reason?: string | null
          recipient?: string
          request_id?: string | null
          response_body?: string | null
          response_headers?: Json | null
          sent_at?: string
          status?: string
          status_text?: string | null
          subject?: string | null
          template_id?: string
          template_label?: string | null
          template_values?: Json | null
        }
        Relationships: []
      }
      email_topic: {
        Row: {
          created_at: string
          description: string
          key: string
          label: string
          sort: number
        }
        Insert: {
          created_at?: string
          description: string
          key: string
          label: string
          sort?: number
        }
        Update: {
          created_at?: string
          description?: string
          key?: string
          label?: string
          sort?: number
        }
        Relationships: []
      }
      email_unsubscribe_token: {
        Row: {
          created_at: string
          profile_id: string
          token: string
        }
        Insert: {
          created_at?: string
          profile_id: string
          token?: string
        }
        Update: {
          created_at?: string
          profile_id?: string
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_unsubscribe_token_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      employee_trainings: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          profile_id: string
          signature_path: string | null
          topic: string
          training_date: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          profile_id: string
          signature_path?: string | null
          topic?: string
          training_date: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          profile_id?: string
          signature_path?: string | null
          topic?: string
          training_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "employee_trainings_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      filling_logs: {
        Row: {
          created_at: string
          filled_at: string
          id: string
          invoice_date: string | null
          invoice_number: string | null
          lot_expiry: string | null
          machine_id: string
          mhd_checked: boolean
          product_id: string
          quantity: number
          recorded_by: string | null
          removed_spoiled: number
          unit_cost: number | null
        }
        Insert: {
          created_at?: string
          filled_at?: string
          id?: string
          invoice_date?: string | null
          invoice_number?: string | null
          lot_expiry?: string | null
          machine_id: string
          mhd_checked?: boolean
          product_id: string
          quantity: number
          recorded_by?: string | null
          removed_spoiled?: number
          unit_cost?: number | null
        }
        Update: {
          created_at?: string
          filled_at?: string
          id?: string
          invoice_date?: string | null
          invoice_number?: string | null
          lot_expiry?: string | null
          machine_id?: string
          mhd_checked?: boolean
          product_id?: string
          quantity?: number
          recorded_by?: string | null
          removed_spoiled?: number
          unit_cost?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "filling_logs_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "filling_logs_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      finance_accounts: {
        Row: {
          code: string
          default_tax: number | null
          direction: "revenue" | "expense" | "asset" | "liability"
          name: string
          sort_order: number
        }
        Insert: {
          code: string
          default_tax?: number | null
          direction: "revenue" | "expense" | "asset" | "liability"
          name: string
          sort_order?: number
        }
        Update: {
          code?: string
          default_tax?: number | null
          direction?: "revenue" | "expense" | "asset" | "liability"
          name?: string
          sort_order?: number
        }
        Relationships: []
      }
      finance_balance_snapshots: {
        Row: {
          as_of: string
          cash_and_bank: number
          created_at: string
          created_by: string | null
          current_liabilities: number
          equity: number
          fixed_assets: number
          id: string
          inventory_value: number
          long_term_liabilities: number
          other_current_assets: number
          receivables: number
          source: string
          updated_at: string
        }
        Insert: {
          as_of: string
          cash_and_bank?: number
          created_at?: string
          created_by?: string | null
          current_liabilities?: number
          equity?: number
          fixed_assets?: number
          id?: string
          inventory_value?: number
          long_term_liabilities?: number
          other_current_assets?: number
          receivables?: number
          source?: string
          updated_at?: string
        }
        Update: {
          as_of?: string
          cash_and_bank?: number
          created_at?: string
          created_by?: string | null
          current_liabilities?: number
          equity?: number
          fixed_assets?: number
          id?: string
          inventory_value?: number
          long_term_liabilities?: number
          other_current_assets?: number
          receivables?: number
          source?: string
          updated_at?: string
        }
        Relationships: []
      }
      finance_bookings: {
        Row: {
          account_code: string
          amount_gross: number | null
          amount_net: number
          amount_tax: number
          booking_date: string
          created_at: string
          created_by: string | null
          deleted_at: string | null
          description: string | null
          direction: "revenue" | "expense" | "asset" | "liability"
          id: string
          source: "sevdesk" | "manual" | "bwa_upload"
          source_account_code: string | null
          source_ref: string | null
          sync_run_id: string | null
          tax_rate: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          account_code: string
          amount_gross?: number | null
          amount_net?: number
          amount_tax?: number
          booking_date: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          description?: string | null
          direction: "revenue" | "expense" | "asset" | "liability"
          id?: string
          source?: "sevdesk" | "manual" | "bwa_upload"
          source_account_code?: string | null
          source_ref?: string | null
          sync_run_id?: string | null
          tax_rate?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          account_code?: string
          amount_gross?: number | null
          amount_net?: number
          amount_tax?: number
          booking_date?: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          description?: string | null
          direction?: "revenue" | "expense" | "asset" | "liability"
          id?: string
          source?: "sevdesk" | "manual" | "bwa_upload"
          source_account_code?: string | null
          source_ref?: string | null
          sync_run_id?: string | null
          tax_rate?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "finance_bookings_account_code_fkey"
            columns: ["account_code"]
            isOneToOne: false
            referencedRelation: "finance_accounts"
            referencedColumns: ["code"]
          },
        ]
      }
      ifsg_briefings: {
        Row: {
          certificate_path: string | null
          created_at: string
          created_by: string | null
          first_briefing: string
          id: string
          next_due: string | null
          profile_id: string
        }
        Insert: {
          certificate_path?: string | null
          created_at?: string
          created_by?: string | null
          first_briefing: string
          id?: string
          next_due?: string | null
          profile_id: string
        }
        Update: {
          certificate_path?: string | null
          created_at?: string
          created_by?: string | null
          first_briefing?: string
          id?: string
          next_due?: string | null
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ifsg_briefings_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory: {
        Row: {
          capacity: number | null
          expiry_date: string | null
          id: string
          machine_id: string
          par_level: number
          product_id: string
          quantity: number
          slot_code: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          capacity?: number | null
          expiry_date?: string | null
          id?: string
          machine_id: string
          par_level?: number
          product_id: string
          quantity?: number
          slot_code?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          capacity?: number | null
          expiry_date?: string | null
          id?: string
          machine_id?: string
          par_level?: number
          product_id?: string
          quantity?: number
          slot_code?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_movements: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          invoice_date: string | null
          invoice_number: string | null
          lot_expiry: string | null
          machine_id: string
          occurred_at: string
          product_id: string
          quantity_delta: number
          reason: string | null
          source: "manual" | "nayax" | "inventory" | "disposal"
          source_ref: string | null
          type: "refill" | "sale" | "disposal" | "correction" | "audit"
          unit_cost: number | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          invoice_date?: string | null
          invoice_number?: string | null
          lot_expiry?: string | null
          machine_id: string
          occurred_at?: string
          product_id: string
          quantity_delta: number
          reason?: string | null
          source?: "manual" | "nayax" | "inventory" | "disposal"
          source_ref?: string | null
          type: "refill" | "sale" | "disposal" | "correction" | "audit"
          unit_cost?: number | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          invoice_date?: string | null
          invoice_number?: string | null
          lot_expiry?: string | null
          machine_id?: string
          occurred_at?: string
          product_id?: string
          quantity_delta?: number
          reason?: string | null
          source?: "manual" | "nayax" | "inventory" | "disposal"
          source_ref?: string | null
          type?: "refill" | "sale" | "disposal" | "correction" | "audit"
          unit_cost?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_movements_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_movements_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          billing_snapshot: Json
          created_at: string
          customer_id: string
          email_sent_at: string | null
          id: string
          invoice_number: string
          issued_at: string
          payment_method:
            | "cash"
            | "card_ec"
            | "card_credit"
            | "card_contactless"
            | "other"
          pdf_generated_at: string | null
          purchase_id: string
          total_gross: number
          total_net_19: number
          total_net_7: number
          total_vat_19: number
          total_vat_7: number
        }
        Insert: {
          billing_snapshot?: Json
          created_at?: string
          customer_id: string
          email_sent_at?: string | null
          id?: string
          invoice_number: string
          issued_at?: string
          payment_method?:
            | "cash"
            | "card_ec"
            | "card_credit"
            | "card_contactless"
            | "other"
          pdf_generated_at?: string | null
          purchase_id: string
          total_gross?: number
          total_net_19?: number
          total_net_7?: number
          total_vat_19?: number
          total_vat_7?: number
        }
        Update: {
          billing_snapshot?: Json
          created_at?: string
          customer_id?: string
          email_sent_at?: string | null
          id?: string
          invoice_number?: string
          issued_at?: string
          payment_method?:
            | "cash"
            | "card_ec"
            | "card_credit"
            | "card_contactless"
            | "other"
          pdf_generated_at?: string | null
          purchase_id?: string
          total_gross?: number
          total_net_19?: number
          total_net_7?: number
          total_vat_19?: number
          total_vat_7?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_purchase_id_fkey"
            columns: ["purchase_id"]
            isOneToOne: true
            referencedRelation: "purchases"
            referencedColumns: ["id"]
          },
        ]
      }
      ki_register: {
        Row: {
          ai_act_kategorie: string
          aktiv: boolean
          ampel: string
          anbieter: string | null
          begruendung: string
          bezeichnung: string
          datenkategorien: string[]
          deepfake_risiko: boolean
          dsgvo_risiko: string
          freigabe_noetig: boolean
          geprueft_am: string
          geprueft_von: string
          ist_ki_system: boolean
          kennzeichnung_noetig: boolean
          kennzeichnung_umgesetzt: boolean
          key: string
          manipulationsrisiko: boolean
          minderjaehrige: boolean
          personenbezug: boolean
          profiling: boolean
          rechtsgrundlage: string | null
          rolle: string
          system: string
          zweck: string
        }
        Insert: {
          ai_act_kategorie?: string
          aktiv?: boolean
          ampel: string
          anbieter?: string | null
          begruendung: string
          bezeichnung: string
          datenkategorien?: string[]
          deepfake_risiko?: boolean
          dsgvo_risiko?: string
          freigabe_noetig?: boolean
          geprueft_am: string
          geprueft_von: string
          ist_ki_system?: boolean
          kennzeichnung_noetig?: boolean
          kennzeichnung_umgesetzt?: boolean
          key: string
          manipulationsrisiko?: boolean
          minderjaehrige?: boolean
          personenbezug: boolean
          profiling?: boolean
          rechtsgrundlage?: string | null
          rolle?: string
          system: string
          zweck: string
        }
        Update: {
          ai_act_kategorie?: string
          aktiv?: boolean
          ampel?: string
          anbieter?: string | null
          begruendung?: string
          bezeichnung?: string
          datenkategorien?: string[]
          deepfake_risiko?: boolean
          dsgvo_risiko?: string
          freigabe_noetig?: boolean
          geprueft_am?: string
          geprueft_von?: string
          ist_ki_system?: boolean
          kennzeichnung_noetig?: boolean
          kennzeichnung_umgesetzt?: boolean
          key?: string
          manipulationsrisiko?: boolean
          minderjaehrige?: boolean
          personenbezug?: boolean
          profiling?: boolean
          rechtsgrundlage?: string | null
          rolle?: string
          system?: string
          zweck?: string
        }
        Relationships: []
      }
      lead_activities: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          lead_id: string
          text: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          lead_id: string
          text: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          lead_id?: string
          text?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_activities_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_activities_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          assigned_to: string | null
          business_id: string | null
          company_name: string
          contact_name: string | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          email: string | null
          id: string
          kind:
            | "advertising"
            | "ad_space"
            | "sponsoring"
            | "partnership"
            | "recruiting"
            | "event"
            | "business"
          message: string | null
          phone: string | null
          source: string | null
          status:
            | "new"
            | "qualified"
            | "contacted"
            | "meeting"
            | "offer"
            | "negotiation"
            | "won"
            | "lost"
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          assigned_to?: string | null
          business_id?: string | null
          company_name: string
          contact_name?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          email?: string | null
          id?: string
          kind:
            | "advertising"
            | "ad_space"
            | "sponsoring"
            | "partnership"
            | "recruiting"
            | "event"
            | "business"
          message?: string | null
          phone?: string | null
          source?: string | null
          status?:
            | "new"
            | "qualified"
            | "contacted"
            | "meeting"
            | "offer"
            | "negotiation"
            | "won"
            | "lost"
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          assigned_to?: string | null
          business_id?: string | null
          company_name?: string
          contact_name?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          email?: string | null
          id?: string
          kind?:
            | "advertising"
            | "ad_space"
            | "sponsoring"
            | "partnership"
            | "recruiting"
            | "event"
            | "business"
          message?: string | null
          phone?: string | null
          source?: string | null
          status?:
            | "new"
            | "qualified"
            | "contacted"
            | "meeting"
            | "offer"
            | "negotiation"
            | "won"
            | "lost"
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      legal_text: {
        Row: {
          aktualisiert_am: string
          inhalt: string
          slug: string
          sortierung: number
          titel: string
        }
        Insert: {
          aktualisiert_am?: string
          inhalt: string
          slug: string
          sortierung?: number
          titel: string
        }
        Update: {
          aktualisiert_am?: string
          inhalt?: string
          slug?: string
          sortierung?: number
          titel?: string
        }
        Relationships: []
      }
      locations: {
        Row: {
          access_hours: string | null
          archived_at: string | null
          city: string | null
          code: string
          country: string
          created_at: string
          created_by: string | null
          deleted_at: string | null
          id: string
          kind: "public" | "business" | "club" | "partner"
          lat: number | null
          lng: number | null
          name: string
          status: "active" | "inactive" | "archived"
          street: string | null
          updated_at: string
          updated_by: string | null
          zip: string | null
        }
        Insert: {
          access_hours?: string | null
          archived_at?: string | null
          city?: string | null
          code: string
          country?: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          kind?: "public" | "business" | "club" | "partner"
          lat?: number | null
          lng?: number | null
          name: string
          status?: "active" | "inactive" | "archived"
          street?: string | null
          updated_at?: string
          updated_by?: string | null
          zip?: string | null
        }
        Update: {
          access_hours?: string | null
          archived_at?: string | null
          city?: string | null
          code?: string
          country?: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          kind?: "public" | "business" | "club" | "partner"
          lat?: number | null
          lng?: number | null
          name?: string
          status?: "active" | "inactive" | "archived"
          street?: string | null
          updated_at?: string
          updated_by?: string | null
          zip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "locations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "locations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      loyalty_bonus_grants: {
        Row: {
          customer_id: string
          granted_at: string
          id: string
          month_start: string
          offer_id: string | null
          tier: number
        }
        Insert: {
          customer_id: string
          granted_at?: string
          id?: string
          month_start: string
          offer_id?: string | null
          tier: number
        }
        Update: {
          customer_id?: string
          granted_at?: string
          id?: string
          month_start?: string
          offer_id?: string | null
          tier?: number
        }
        Relationships: [
          {
            foreignKeyName: "loyalty_bonus_grants_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "loyalty_bonus_grants_offer_id_fkey"
            columns: ["offer_id"]
            isOneToOne: false
            referencedRelation: "personal_offers"
            referencedColumns: ["id"]
          },
        ]
      }
      machine_devices: {
        Row: {
          external_device_id: string
          firmware_version: string | null
          id: string
          installed_at: string
          is_active: boolean
          last_heartbeat_at: string | null
          last_seen_at: string | null
          machine_id: string
          notes: string | null
          provider_id: string
        }
        Insert: {
          external_device_id: string
          firmware_version?: string | null
          id?: string
          installed_at?: string
          is_active?: boolean
          last_heartbeat_at?: string | null
          last_seen_at?: string | null
          machine_id: string
          notes?: string | null
          provider_id: string
        }
        Update: {
          external_device_id?: string
          firmware_version?: string | null
          id?: string
          installed_at?: string
          is_active?: boolean
          last_heartbeat_at?: string | null
          last_seen_at?: string | null
          machine_id?: string
          notes?: string | null
          provider_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "machine_devices_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "machine_devices_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "telemetry_providers"
            referencedColumns: ["id"]
          },
        ]
      }
      machine_health: {
        Row: {
          active_alarms: Json
          cash_balance_net: number | null
          door_state: string | null
          last_heartbeat_at: string | null
          last_seen_at: string | null
          machine_id: string
          temperature_c: number | null
          updated_at: string
        }
        Insert: {
          active_alarms?: Json
          cash_balance_net?: number | null
          door_state?: string | null
          last_heartbeat_at?: string | null
          last_seen_at?: string | null
          machine_id: string
          temperature_c?: number | null
          updated_at?: string
        }
        Update: {
          active_alarms?: Json
          cash_balance_net?: number | null
          door_state?: string | null
          last_heartbeat_at?: string | null
          last_seen_at?: string | null
          machine_id?: string
          temperature_c?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "machine_health_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: true
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
        ]
      }
      machine_sales_daily: {
        Row: {
          day: string
          gross_total: number
          machine_id: string
        }
        Insert: {
          day: string
          gross_total?: number
          machine_id: string
        }
        Update: {
          day?: string
          gross_total?: number
          machine_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "machine_sales_daily_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
        ]
      }
      machine_slots: {
        Row: {
          capacity: number
          id: string
          machine_id: string
          product_id: string | null
          slot_code: string
          unit_price_net: number | null
          updated_at: string
        }
        Insert: {
          capacity?: number
          id?: string
          machine_id: string
          product_id?: string | null
          slot_code: string
          unit_price_net?: number | null
          updated_at?: string
        }
        Update: {
          capacity?: number
          id?: string
          machine_id?: string
          product_id?: string | null
          slot_code?: string
          unit_price_net?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "machine_slots_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "machine_slots_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      machine_slots_history: {
        Row: {
          created_at: string
          id: string
          machine_id: string
          product_id: string | null
          reason: string | null
          slot_code: string
          unit_price_net: number | null
          valid_from: string
          valid_to: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          machine_id: string
          product_id?: string | null
          reason?: string | null
          slot_code: string
          unit_price_net?: number | null
          valid_from?: string
          valid_to?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          machine_id?: string
          product_id?: string | null
          reason?: string | null
          slot_code?: string
          unit_price_net?: number | null
          valid_from?: string
          valid_to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "machine_slots_history_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "machine_slots_history_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      machine_telemetry_events: {
        Row: {
          device_id: string | null
          dispense_confirmed: boolean | null
          error_reason: string | null
          event_type:
            | "sale"
            | "dispense_ok"
            | "dispense_fail"
            | "refill"
            | "disposal"
            | "price_change"
            | "slot_config"
            | "heartbeat"
            | "temperature"
            | "door"
            | "alarm"
            | "cash_collection"
          event_uid: string
          id: string
          machine_id: string | null
          occurred_at: string
          payload_norm: Json | null
          payload_raw: Json
          processed_at: string | null
          product_id_hint: string | null
          provider_id: string
          quantity: number | null
          received_at: string
          slot_code: string | null
          status: "received" | "processed" | "duplicate" | "rejected"
          temperature_c: number | null
          unit_price_net: number | null
        }
        Insert: {
          device_id?: string | null
          dispense_confirmed?: boolean | null
          error_reason?: string | null
          event_type:
            | "sale"
            | "dispense_ok"
            | "dispense_fail"
            | "refill"
            | "disposal"
            | "price_change"
            | "slot_config"
            | "heartbeat"
            | "temperature"
            | "door"
            | "alarm"
            | "cash_collection"
          event_uid: string
          id?: string
          machine_id?: string | null
          occurred_at: string
          payload_norm?: Json | null
          payload_raw: Json
          processed_at?: string | null
          product_id_hint?: string | null
          provider_id: string
          quantity?: number | null
          received_at?: string
          slot_code?: string | null
          status?: "received" | "processed" | "duplicate" | "rejected"
          temperature_c?: number | null
          unit_price_net?: number | null
        }
        Update: {
          device_id?: string | null
          dispense_confirmed?: boolean | null
          error_reason?: string | null
          event_type?:
            | "sale"
            | "dispense_ok"
            | "dispense_fail"
            | "refill"
            | "disposal"
            | "price_change"
            | "slot_config"
            | "heartbeat"
            | "temperature"
            | "door"
            | "alarm"
            | "cash_collection"
          event_uid?: string
          id?: string
          machine_id?: string | null
          occurred_at?: string
          payload_norm?: Json | null
          payload_raw?: Json
          processed_at?: string | null
          product_id_hint?: string | null
          provider_id?: string
          quantity?: number | null
          received_at?: string
          slot_code?: string | null
          status?: "received" | "processed" | "duplicate" | "rejected"
          temperature_c?: number | null
          unit_price_net?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "machine_telemetry_events_device_id_fkey"
            columns: ["device_id"]
            isOneToOne: false
            referencedRelation: "machine_devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "machine_telemetry_events_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "machine_telemetry_events_product_id_hint_fkey"
            columns: ["product_id_hint"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "machine_telemetry_events_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "telemetry_providers"
            referencedColumns: ["id"]
          },
        ]
      }
      machines: {
        Row: {
          access_hours: string | null
          archived_at: string | null
          city: string | null
          code: string
          created_at: string
          created_by: string | null
          deleted_at: string | null
          id: string
          image_url: string | null
          is_cooled: boolean
          lat: number | null
          lng: number | null
          location_id: string | null
          location_name: string | null
          name: string
          nayax_terminal_id: string | null
          status: "active" | "inactive" | "archived"
          street: string | null
          type: "snack" | "drink" | "combi" | "cooled"
          updated_at: string
          updated_by: string | null
          zip: string | null
        }
        Insert: {
          access_hours?: string | null
          archived_at?: string | null
          city?: string | null
          code: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          image_url?: string | null
          is_cooled?: boolean
          lat?: number | null
          lng?: number | null
          location_id?: string | null
          location_name?: string | null
          name: string
          nayax_terminal_id?: string | null
          status?: "active" | "inactive" | "archived"
          street?: string | null
          type?: "snack" | "drink" | "combi" | "cooled"
          updated_at?: string
          updated_by?: string | null
          zip?: string | null
        }
        Update: {
          access_hours?: string | null
          archived_at?: string | null
          city?: string | null
          code?: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          image_url?: string | null
          is_cooled?: boolean
          lat?: number | null
          lng?: number | null
          location_id?: string | null
          location_name?: string | null
          name?: string
          nayax_terminal_id?: string | null
          status?: "active" | "inactive" | "archived"
          street?: string | null
          type?: "snack" | "drink" | "combi" | "cooled"
          updated_at?: string
          updated_by?: string | null
          zip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "machines_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
        ]
      }
      maintenance_logs: {
        Row: {
          action: string | null
          cost_amount: number | null
          created_at: string
          id: string
          issue: string
          machine_id: string
          performed_by: string | null
          recorded_by: string | null
          reported_at: string
          resolved: boolean
        }
        Insert: {
          action?: string | null
          cost_amount?: number | null
          created_at?: string
          id?: string
          issue: string
          machine_id: string
          performed_by?: string | null
          recorded_by?: string | null
          reported_at?: string
          resolved?: boolean
        }
        Update: {
          action?: string | null
          cost_amount?: number | null
          created_at?: string
          id?: string
          issue?: string
          machine_id?: string
          performed_by?: string | null
          recorded_by?: string | null
          reported_at?: string
          resolved?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "maintenance_logs_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
        ]
      }
      nayax_sales: {
        Row: {
          amount_gross: number | null
          created_at: string
          id: string
          machine_id: string | null
          product_id: string | null
          product_ref: string | null
          quantity: number
          raw: Json | null
          sold_at: string
          source_ref: string | null
          terminal_id: string | null
        }
        Insert: {
          amount_gross?: number | null
          created_at?: string
          id?: string
          machine_id?: string | null
          product_id?: string | null
          product_ref?: string | null
          quantity?: number
          raw?: Json | null
          sold_at: string
          source_ref?: string | null
          terminal_id?: string | null
        }
        Update: {
          amount_gross?: number | null
          created_at?: string
          id?: string
          machine_id?: string | null
          product_id?: string | null
          product_ref?: string | null
          quantity?: number
          raw?: Json | null
          sold_at?: string
          source_ref?: string | null
          terminal_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nayax_sales_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nayax_sales_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      news_articles: {
        Row: {
          body: string
          created_at: string
          id: string
          image_url: string | null
          is_published: boolean
          published_at: string
          summary: string | null
          title: string
        }
        Insert: {
          body: string
          created_at?: string
          id?: string
          image_url?: string | null
          is_published?: boolean
          published_at?: string
          summary?: string | null
          title: string
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          image_url?: string | null
          is_published?: boolean
          published_at?: string
          summary?: string | null
          title?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          body: string | null
          data: Json | null
          id: string
          read_at: string | null
          sent_at: string
          title: string
          user_id: string
        }
        Insert: {
          body?: string | null
          data?: Json | null
          id?: string
          read_at?: string | null
          sent_at?: string
          title: string
          user_id: string
        }
        Update: {
          body?: string | null
          data?: Json | null
          id?: string
          read_at?: string | null
          sent_at?: string
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      offer_activations: {
        Row: {
          activated_at: string
          customer_id: string
          id: string
          offer_id: string
          redeemed_at: string | null
        }
        Insert: {
          activated_at?: string
          customer_id: string
          id?: string
          offer_id: string
          redeemed_at?: string | null
        }
        Update: {
          activated_at?: string
          customer_id?: string
          id?: string
          offer_id?: string
          redeemed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "offer_activations_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "offer_activations_offer_id_fkey"
            columns: ["offer_id"]
            isOneToOne: false
            referencedRelation: "offers"
            referencedColumns: ["id"]
          },
        ]
      }
      offers: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          discount_percent: number | null
          id: string
          image_path: string | null
          image_url: string | null
          kind: string
          offer_price_net: number | null
          product_id: string | null
          regular_price_net: number | null
          status: "active" | "inactive" | "archived"
          title: string
          updated_at: string
          updated_by: string | null
          valid_from: string
          valid_to: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          discount_percent?: number | null
          id?: string
          image_path?: string | null
          image_url?: string | null
          kind?: string
          offer_price_net?: number | null
          product_id?: string | null
          regular_price_net?: number | null
          status?: "active" | "inactive" | "archived"
          title: string
          updated_at?: string
          updated_by?: string | null
          valid_from?: string
          valid_to?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          discount_percent?: number | null
          id?: string
          image_path?: string | null
          image_url?: string | null
          kind?: string
          offer_price_net?: number | null
          product_id?: string | null
          regular_price_net?: number | null
          status?: "active" | "inactive" | "archived"
          title?: string
          updated_at?: string
          updated_by?: string | null
          valid_from?: string
          valid_to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "offers_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_signatures: {
        Row: {
          captured_at: string | null
          captured_via: string | null
          created_at: string
          docusign_account_id: string | null
          docusign_envelope_id: string | null
          docusign_signature_uri: string | null
          docusign_user_id: string | null
          full_name: string
          id: string
          image_url: string | null
          profile_id: string | null
          role_label: string
          sort_order: number
        }
        Insert: {
          captured_at?: string | null
          captured_via?: string | null
          created_at?: string
          docusign_account_id?: string | null
          docusign_envelope_id?: string | null
          docusign_signature_uri?: string | null
          docusign_user_id?: string | null
          full_name: string
          id?: string
          image_url?: string | null
          profile_id?: string | null
          role_label?: string
          sort_order?: number
        }
        Update: {
          captured_at?: string | null
          captured_via?: string | null
          created_at?: string
          docusign_account_id?: string | null
          docusign_envelope_id?: string | null
          docusign_signature_uri?: string | null
          docusign_user_id?: string | null
          full_name?: string
          id?: string
          image_url?: string | null
          profile_id?: string | null
          role_label?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "partner_signatures_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount_gross: number
          created_at: string
          created_by: string | null
          currency: string
          failed_reason: string | null
          id: string
          idempotency_key: string
          kind: "purchase" | "wallet_topup" | "invoice" | "refund"
          payer_business_id: string | null
          payer_profile_id: string | null
          provider: string
          provider_ref: string | null
          purchase_id: string | null
          refunds_payment_id: string | null
          status:
            | "pending"
            | "authorized"
            | "captured"
            | "failed"
            | "refunded"
            | "cancelled"
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          amount_gross: number
          created_at?: string
          created_by?: string | null
          currency?: string
          failed_reason?: string | null
          id?: string
          idempotency_key: string
          kind: "purchase" | "wallet_topup" | "invoice" | "refund"
          payer_business_id?: string | null
          payer_profile_id?: string | null
          provider: string
          provider_ref?: string | null
          purchase_id?: string | null
          refunds_payment_id?: string | null
          status?:
            | "pending"
            | "authorized"
            | "captured"
            | "failed"
            | "refunded"
            | "cancelled"
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          amount_gross?: number
          created_at?: string
          created_by?: string | null
          currency?: string
          failed_reason?: string | null
          id?: string
          idempotency_key?: string
          kind?: "purchase" | "wallet_topup" | "invoice" | "refund"
          payer_business_id?: string | null
          payer_profile_id?: string | null
          provider?: string
          provider_ref?: string | null
          purchase_id?: string | null
          refunds_payment_id?: string | null
          status?:
            | "pending"
            | "authorized"
            | "captured"
            | "failed"
            | "refunded"
            | "cancelled"
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_payer_business_id_fkey"
            columns: ["payer_business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_payer_profile_id_fkey"
            columns: ["payer_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_purchase_id_fkey"
            columns: ["purchase_id"]
            isOneToOne: false
            referencedRelation: "purchases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_refunds_payment_id_fkey"
            columns: ["refunds_payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      permissions: {
        Row: {
          area: string
          description: string | null
          key: string
        }
        Insert: {
          area: string
          description?: string | null
          key: string
        }
        Update: {
          area?: string
          description?: string | null
          key?: string
        }
        Relationships: []
      }
      personal_offers: {
        Row: {
          activated_at: string | null
          created_at: string
          created_by: string | null
          customer_id: string
          discount_percent: number
          id: string
          image_url: string | null
          offer_price_net: number
          product_id: string
          redeemed_at: string | null
          redeemed_at_machine: string | null
          redemption_code: string
          regular_price_net: number
          source: string
          title: string
          valid_from: string
          valid_to: string
        }
        Insert: {
          activated_at?: string | null
          created_at?: string
          created_by?: string | null
          customer_id: string
          discount_percent: number
          id?: string
          image_url?: string | null
          offer_price_net: number
          product_id: string
          redeemed_at?: string | null
          redeemed_at_machine?: string | null
          redemption_code: string
          regular_price_net: number
          source?: string
          title: string
          valid_from?: string
          valid_to: string
        }
        Update: {
          activated_at?: string | null
          created_at?: string
          created_by?: string | null
          customer_id?: string
          discount_percent?: number
          id?: string
          image_url?: string | null
          offer_price_net?: number
          product_id?: string
          redeemed_at?: string | null
          redeemed_at_machine?: string | null
          redemption_code?: string
          regular_price_net?: number
          source?: string
          title?: string
          valid_from?: string
          valid_to?: string
        }
        Relationships: [
          {
            foreignKeyName: "personal_offers_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "personal_offers_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "personal_offers_redeemed_at_machine_fkey"
            columns: ["redeemed_at_machine"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
        ]
      }
      pkw: {
        Row: {
          aktiv: boolean
          bezeichnung: string | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          id: string
          kennzeichen: string
          sort_order: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          aktiv?: boolean
          bezeichnung?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          kennzeichen: string
          sort_order?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          aktiv?: boolean
          bezeichnung?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          kennzeichen?: string
          sort_order?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pkw_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pkw_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pkw_fahrten: {
        Row: {
          anlass: string
          created_at: string
          created_by: string | null
          deleted_at: string | null
          fahrt_datum: string
          id: string
          kilometer: number
          pkw_id: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          anlass: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          fahrt_datum: string
          id?: string
          kilometer: number
          pkw_id: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          anlass?: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          fahrt_datum?: string
          id?: string
          kilometer?: number
          pkw_id?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pkw_fahrten_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pkw_fahrten_pkw_id_fkey"
            columns: ["pkw_id"]
            isOneToOne: false
            referencedRelation: "pkw"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pkw_fahrten_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pkw_jahr: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          jahr: number
          km_stand_anfang: number | null
          km_stand_ende: number | null
          pkw_id: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          jahr: number
          km_stand_anfang?: number | null
          km_stand_ende?: number | null
          pkw_id: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          jahr?: number
          km_stand_anfang?: number | null
          km_stand_ende?: number | null
          pkw_id?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pkw_jahr_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pkw_jahr_pkw_id_fkey"
            columns: ["pkw_id"]
            isOneToOne: false
            referencedRelation: "pkw"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pkw_jahr_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pkw_kosten: {
        Row: {
          beleg_datum: string | null
          betrag_brutto: number
          bezeichnung: string | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          id: string
          jahr: number
          kostenart: string
          pkw_id: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          beleg_datum?: string | null
          betrag_brutto: number
          bezeichnung?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          jahr: number
          kostenart: string
          pkw_id: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          beleg_datum?: string | null
          betrag_brutto?: number
          bezeichnung?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          jahr?: number
          kostenart?: string
          pkw_id?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pkw_kosten_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pkw_kosten_pkw_id_fkey"
            columns: ["pkw_id"]
            isOneToOne: false
            referencedRelation: "pkw"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pkw_kosten_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      product_ratings: {
        Row: {
          created_at: string
          customer_id: string
          id: string
          product_id: string
          rating: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_id: string
          id?: string
          product_id: string
          rating: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_id?: string
          id?: string
          product_id?: string
          rating?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_ratings_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_ratings_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          allergens: string[] | null
          carbs_g: number | null
          category: string | null
          cost_price_net: number | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          ean: string | null
          energy_kcal: number | null
          fat_g: number | null
          id: string
          image_url: string | null
          list_price_net: number | null
          name: string
          protein_g: number | null
          salt_g: number | null
          saturated_fat_g: number | null
          serve_temp: string
          sku: string | null
          status: "active" | "inactive" | "archived"
          subcategory: string | null
          sugars_g: number | null
          tax_rate: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          allergens?: string[] | null
          carbs_g?: number | null
          category?: string | null
          cost_price_net?: number | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          ean?: string | null
          energy_kcal?: number | null
          fat_g?: number | null
          id?: string
          image_url?: string | null
          list_price_net?: number | null
          name: string
          protein_g?: number | null
          salt_g?: number | null
          saturated_fat_g?: number | null
          serve_temp?: string
          sku?: string | null
          status?: "active" | "inactive" | "archived"
          subcategory?: string | null
          sugars_g?: number | null
          tax_rate?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          allergens?: string[] | null
          carbs_g?: number | null
          category?: string | null
          cost_price_net?: number | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          ean?: string | null
          energy_kcal?: number | null
          fat_g?: number | null
          id?: string
          image_url?: string | null
          list_price_net?: number | null
          name?: string
          protein_g?: number | null
          salt_g?: number | null
          saturated_fat_g?: number | null
          serve_temp?: string
          sku?: string | null
          status?: "active" | "inactive" | "archived"
          subcategory?: string | null
          sugars_g?: number | null
          tax_rate?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      produktbilder: {
        Row: {
          art50_geprueft: boolean
          aufnahmedatum: string
          bearbeitung: string | null
          bemerkung: string | null
          bildpfad: string | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          fotograf: string
          freigabe_am: string | null
          freigegeben_von: string | null
          id: string
          kennzeichnung_noetig: boolean | null
          ki_neue_umgebung: boolean
          ki_neues_produkt: boolean
          ki_system: string | null
          ki_verwendet: boolean
          originalfoto: string
          produkt: string
          produkt_id: string | null
          produkt_veraendert: boolean
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          art50_geprueft?: boolean
          aufnahmedatum: string
          bearbeitung?: string | null
          bemerkung?: string | null
          bildpfad?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          fotograf?: string
          freigabe_am?: string | null
          freigegeben_von?: string | null
          id?: string
          kennzeichnung_noetig?: boolean | null
          ki_neue_umgebung?: boolean
          ki_neues_produkt?: boolean
          ki_system?: string | null
          ki_verwendet?: boolean
          originalfoto: string
          produkt: string
          produkt_id?: string | null
          produkt_veraendert?: boolean
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          art50_geprueft?: boolean
          aufnahmedatum?: string
          bearbeitung?: string | null
          bemerkung?: string | null
          bildpfad?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          fotograf?: string
          freigabe_am?: string | null
          freigegeben_von?: string | null
          id?: string
          kennzeichnung_noetig?: boolean | null
          ki_neue_umgebung?: boolean
          ki_neues_produkt?: boolean
          ki_system?: string | null
          ki_verwendet?: boolean
          originalfoto?: string
          produkt?: string
          produkt_id?: string | null
          produkt_veraendert?: boolean
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "produktbilder_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "produktbilder_produkt_id_fkey"
            columns: ["produkt_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "produktbilder_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          activated_at: string | null
          archived_at: string | null
          birth_date: string | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          email: string
          full_name: string | null
          gender: "m" | "w" | "d" | null
          id: string
          invited_by: string | null
          phone: string | null
          role: "system_admin" | "shareholder" | "employee" | "customer"
          status: "invited" | "active" | "deactivated" | "archived"
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          activated_at?: string | null
          archived_at?: string | null
          birth_date?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          email: string
          full_name?: string | null
          gender?: "m" | "w" | "d" | null
          id: string
          invited_by?: string | null
          phone?: string | null
          role?: "system_admin" | "shareholder" | "employee" | "customer"
          status?: "invited" | "active" | "deactivated" | "archived"
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          activated_at?: string | null
          archived_at?: string | null
          birth_date?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          email?: string
          full_name?: string | null
          gender?: "m" | "w" | "d" | null
          id?: string
          invited_by?: string | null
          phone?: string | null
          role?: "system_admin" | "shareholder" | "employee" | "customer"
          status?: "invited" | "active" | "deactivated" | "archived"
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_invited_by_fkey"
            columns: ["invited_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      purchase_complaints: {
        Row: {
          comment: string | null
          created_at: string
          customer_id: string
          id: string
          kind: "not_received" | "damaged" | "wrong_product" | "other"
          photo_path: string | null
          purchase_id: string
          resolution_note: string | null
          status: "open" | "in_progress" | "resolved" | "rejected"
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          customer_id: string
          id?: string
          kind: "not_received" | "damaged" | "wrong_product" | "other"
          photo_path?: string | null
          purchase_id: string
          resolution_note?: string | null
          status?: "open" | "in_progress" | "resolved" | "rejected"
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          customer_id?: string
          id?: string
          kind?: "not_received" | "damaged" | "wrong_product" | "other"
          photo_path?: string | null
          purchase_id?: string
          resolution_note?: string | null
          status?: "open" | "in_progress" | "resolved" | "rejected"
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "purchase_complaints_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_complaints_purchase_id_fkey"
            columns: ["purchase_id"]
            isOneToOne: false
            referencedRelation: "purchases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_complaints_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      purchase_items: {
        Row: {
          id: string
          product_id: string | null
          product_label: string | null
          purchase_id: string
          quantity: number
          unit_price: number
        }
        Insert: {
          id?: string
          product_id?: string | null
          product_label?: string | null
          purchase_id: string
          quantity?: number
          unit_price?: number
        }
        Update: {
          id?: string
          product_id?: string | null
          product_label?: string | null
          purchase_id?: string
          quantity?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "purchase_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_items_purchase_id_fkey"
            columns: ["purchase_id"]
            isOneToOne: false
            referencedRelation: "purchases"
            referencedColumns: ["id"]
          },
        ]
      }
      purchases: {
        Row: {
          business_id: string | null
          created_at: string
          customer_id: string
          id: string
          machine_id: string | null
          payment_method:
            | "cash"
            | "card_ec"
            | "card_credit"
            | "card_contactless"
            | "other"
          purchased_at: string
          source: "nayax" | "manual" | "import" | "demo"
          source_ref: string | null
          total_gross: number
        }
        Insert: {
          business_id?: string | null
          created_at?: string
          customer_id: string
          id?: string
          machine_id?: string | null
          payment_method?:
            | "cash"
            | "card_ec"
            | "card_credit"
            | "card_contactless"
            | "other"
          purchased_at?: string
          source?: "nayax" | "manual" | "import" | "demo"
          source_ref?: string | null
          total_gross?: number
        }
        Update: {
          business_id?: string | null
          created_at?: string
          customer_id?: string
          id?: string
          machine_id?: string | null
          payment_method?:
            | "cash"
            | "card_ec"
            | "card_credit"
            | "card_contactless"
            | "other"
          purchased_at?: string
          source?: "nayax" | "manual" | "import" | "demo"
          source_ref?: string | null
          total_gross?: number
        }
        Relationships: [
          {
            foreignKeyName: "purchases_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchases_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchases_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
        ]
      }
      recommendations: {
        Row: {
          created_at: string
          customer_id: string
          id: string
          product_id: string
          reason: string | null
          score: number
        }
        Insert: {
          created_at?: string
          customer_id: string
          id?: string
          product_id: string
          reason?: string | null
          score?: number
        }
        Update: {
          created_at?: string
          customer_id?: string
          id?: string
          product_id?: string
          reason?: string | null
          score?: number
        }
        Relationships: [
          {
            foreignKeyName: "recommendations_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recommendations_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      referral_codes: {
        Row: {
          code: string
          created_at: string
          owner_id: string
        }
        Insert: {
          code: string
          created_at?: string
          owner_id: string
        }
        Update: {
          code?: string
          created_at?: string
          owner_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "referral_codes_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      referral_config: {
        Row: {
          enabled: boolean
          id: number
          max_rewards_per_year: number
          months_monthly: number
          months_yearly: number
          updated_at: string
          withdrawal_days: number
        }
        Insert: {
          enabled?: boolean
          id?: number
          max_rewards_per_year?: number
          months_monthly?: number
          months_yearly?: number
          updated_at?: string
          withdrawal_days?: number
        }
        Update: {
          enabled?: boolean
          id?: number
          max_rewards_per_year?: number
          months_monthly?: number
          months_yearly?: number
          updated_at?: string
          withdrawal_days?: number
        }
        Relationships: []
      }
      referral_milestones: {
        Row: {
          badge_code: string | null
          bonus_months: number
          grants_lifetime: boolean
          label: string
          threshold: number
        }
        Insert: {
          badge_code?: string | null
          bonus_months?: number
          grants_lifetime?: boolean
          label: string
          threshold: number
        }
        Update: {
          badge_code?: string | null
          bonus_months?: number
          grants_lifetime?: boolean
          label?: string
          threshold?: number
        }
        Relationships: []
      }
      referral_rewards: {
        Row: {
          badge_code: string | null
          granted_at: string
          id: string
          kind: string
          months: number
          note: string | null
          profile_id: string
          referral_id: string | null
        }
        Insert: {
          badge_code?: string | null
          granted_at?: string
          id?: string
          kind: string
          months?: number
          note?: string | null
          profile_id: string
          referral_id?: string | null
        }
        Update: {
          badge_code?: string | null
          granted_at?: string
          id?: string
          kind?: string
          months?: number
          note?: string | null
          profile_id?: string
          referral_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "referral_rewards_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_rewards_referral_id_fkey"
            columns: ["referral_id"]
            isOneToOne: false
            referencedRelation: "referrals"
            referencedColumns: ["id"]
          },
        ]
      }
      referrals: {
        Row: {
          code: string
          id: string
          payable_at: string | null
          qualified_at: string | null
          referee_id: string
          referee_months: number
          referee_plan: "monthly" | "yearly" | "lifetime" | null
          referrer_id: string
          referrer_months: number
          registered_at: string
          reject_reason: string | null
          rewarded_at: string | null
          status: "registered" | "qualified" | "rewarded" | "rejected"
        }
        Insert: {
          code: string
          id?: string
          payable_at?: string | null
          qualified_at?: string | null
          referee_id: string
          referee_months?: number
          referee_plan?: "monthly" | "yearly" | "lifetime" | null
          referrer_id: string
          referrer_months?: number
          registered_at?: string
          reject_reason?: string | null
          rewarded_at?: string | null
          status?: "registered" | "qualified" | "rewarded" | "rejected"
        }
        Update: {
          code?: string
          id?: string
          payable_at?: string | null
          qualified_at?: string | null
          referee_id?: string
          referee_months?: number
          referee_plan?: "monthly" | "yearly" | "lifetime" | null
          referrer_id?: string
          referrer_months?: number
          registered_at?: string
          reject_reason?: string | null
          rewarded_at?: string | null
          status?: "registered" | "qualified" | "rewarded" | "rejected"
        }
        Relationships: [
          {
            foreignKeyName: "referrals_referee_id_fkey"
            columns: ["referee_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      role_permissions: {
        Row: {
          permission_key: string
          role_key: "system_admin" | "shareholder" | "employee" | "customer"
        }
        Insert: {
          permission_key: string
          role_key: "system_admin" | "shareholder" | "employee" | "customer"
        }
        Update: {
          permission_key?: string
          role_key?: "system_admin" | "shareholder" | "employee" | "customer"
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_permission_key_fkey"
            columns: ["permission_key"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["key"]
          },
          {
            foreignKeyName: "role_permissions_role_key_fkey"
            columns: ["role_key"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["key"]
          },
        ]
      }
      roles: {
        Row: {
          description: string | null
          key: "system_admin" | "shareholder" | "employee" | "customer"
          name: string
        }
        Insert: {
          description?: string | null
          key: "system_admin" | "shareholder" | "employee" | "customer"
          name: string
        }
        Update: {
          description?: string | null
          key?: "system_admin" | "shareholder" | "employee" | "customer"
          name?: string
        }
        Relationships: []
      }
      sevdesk_sync_runs: {
        Row: {
          diagnostics: Json | null
          error: string | null
          fetched_count: number
          finished_at: string | null
          from_date: string
          id: string
          inserted_count: number
          started_at: string
          status: "running" | "success" | "error"
          to_date: string
          triggered_by: string | null
          updated_count: number
        }
        Insert: {
          diagnostics?: Json | null
          error?: string | null
          fetched_count?: number
          finished_at?: string | null
          from_date: string
          id?: string
          inserted_count?: number
          started_at?: string
          status?: "running" | "success" | "error"
          to_date: string
          triggered_by?: string | null
          updated_count?: number
        }
        Update: {
          diagnostics?: Json | null
          error?: string | null
          fetched_count?: number
          finished_at?: string | null
          from_date?: string
          id?: string
          inserted_count?: number
          started_at?: string
          status?: "running" | "success" | "error"
          to_date?: string
          triggered_by?: string | null
          updated_count?: number
        }
        Relationships: []
      }
      shareholder_approvals: {
        Row: {
          approved_by: string | null
          created_at: string
          decided_at: string | null
          id: string
          reason: string | null
          requested_by: string
          requested_for: string
          status: "pending" | "approved" | "rejected"
        }
        Insert: {
          approved_by?: string | null
          created_at?: string
          decided_at?: string | null
          id?: string
          reason?: string | null
          requested_by: string
          requested_for: string
          status?: "pending" | "approved" | "rejected"
        }
        Update: {
          approved_by?: string | null
          created_at?: string
          decided_at?: string | null
          id?: string
          reason?: string | null
          requested_by?: string
          requested_for?: string
          status?: "pending" | "approved" | "rejected"
        }
        Relationships: [
          {
            foreignKeyName: "shareholder_approvals_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shareholder_approvals_requested_by_fkey"
            columns: ["requested_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shareholder_approvals_requested_for_fkey"
            columns: ["requested_for"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      signatures: {
        Row: {
          entity_id: string
          entity_type: string
          id: string
          image_path: string
          signed_at: string
          signer_id: string | null
          signer_name: string | null
        }
        Insert: {
          entity_id: string
          entity_type: string
          id?: string
          image_path: string
          signed_at?: string
          signer_id?: string | null
          signer_name?: string | null
        }
        Update: {
          entity_id?: string
          entity_type?: string
          id?: string
          image_path?: string
          signed_at?: string
          signer_id?: string | null
          signer_name?: string | null
        }
        Relationships: []
      }
      sponsorships: {
        Row: {
          bemerkung: string | null
          beteiligung_prozent: number | null
          betrag_monat: number
          bis: string | null
          business_id: string
          campaign_id: string | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          id: string
          location_id: string
          status:
            | "entwurf"
            | "zur_unterschrift"
            | "aktiv"
            | "beendet"
            | "gekuendigt"
          updated_at: string
          updated_by: string | null
          von: string
        }
        Insert: {
          bemerkung?: string | null
          beteiligung_prozent?: number | null
          betrag_monat: number
          bis?: string | null
          business_id: string
          campaign_id?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          location_id: string
          status?:
            | "entwurf"
            | "zur_unterschrift"
            | "aktiv"
            | "beendet"
            | "gekuendigt"
          updated_at?: string
          updated_by?: string | null
          von: string
        }
        Update: {
          bemerkung?: string | null
          beteiligung_prozent?: number | null
          betrag_monat?: number
          bis?: string | null
          business_id?: string
          campaign_id?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          location_id?: string
          status?:
            | "entwurf"
            | "zur_unterschrift"
            | "aktiv"
            | "beendet"
            | "gekuendigt"
          updated_at?: string
          updated_by?: string | null
          von?: string
        }
        Relationships: [
          {
            foreignKeyName: "sponsorships_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sponsorships_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "advertising_campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sponsorships_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sponsorships_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sponsorships_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      store_notification: {
        Row: {
          event_at: string | null
          id: string
          note: string | null
          notification_id: string
          notification_type: string | null
          outcome: string
          raw: Json
          received_at: string
          store: string
          store_ref: string | null
          subtype: string | null
        }
        Insert: {
          event_at?: string | null
          id?: string
          note?: string | null
          notification_id: string
          notification_type?: string | null
          outcome: string
          raw: Json
          received_at?: string
          store: string
          store_ref?: string | null
          subtype?: string | null
        }
        Update: {
          event_at?: string | null
          id?: string
          note?: string | null
          notification_id?: string
          notification_type?: string | null
          outcome?: string
          raw?: Json
          received_at?: string
          store?: string
          store_ref?: string | null
          subtype?: string | null
        }
        Relationships: []
      }
      store_subscription: {
        Row: {
          auto_renew: boolean | null
          cancelled_at: string | null
          created_at: string
          environment: string
          expires_at: string | null
          id: string
          last_event_at: string | null
          last_notification: string | null
          product_id: string
          profile_id: string | null
          purchased_at: string | null
          revoked_at: string | null
          status: string
          store: string
          store_ref: string
          updated_at: string
        }
        Insert: {
          auto_renew?: boolean | null
          cancelled_at?: string | null
          created_at?: string
          environment?: string
          expires_at?: string | null
          id?: string
          last_event_at?: string | null
          last_notification?: string | null
          product_id: string
          profile_id?: string | null
          purchased_at?: string | null
          revoked_at?: string | null
          status?: string
          store: string
          store_ref: string
          updated_at?: string
        }
        Update: {
          auto_renew?: boolean | null
          cancelled_at?: string | null
          created_at?: string
          environment?: string
          expires_at?: string | null
          id?: string
          last_event_at?: string | null
          last_notification?: string | null
          product_id?: string
          profile_id?: string | null
          purchased_at?: string | null
          revoked_at?: string | null
          status?: string
          store?: string
          store_ref?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "store_subscription_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      telemetry_providers: {
        Row: {
          adapter: "generic" | "clevermetrics" | "nayax" | "custom"
          created_at: string
          hmac_secret: string
          id: string
          is_active: boolean
          name: string
          notes: string | null
          time_skew_max_s: number
          updated_at: string
        }
        Insert: {
          adapter?: "generic" | "clevermetrics" | "nayax" | "custom"
          created_at?: string
          hmac_secret: string
          id?: string
          is_active?: boolean
          name: string
          notes?: string | null
          time_skew_max_s?: number
          updated_at?: string
        }
        Update: {
          adapter?: "generic" | "clevermetrics" | "nayax" | "custom"
          created_at?: string
          hmac_secret?: string
          id?: string
          is_active?: boolean
          name?: string
          notes?: string | null
          time_skew_max_s?: number
          updated_at?: string
        }
        Relationships: []
      }
      temperature_logs: {
        Row: {
          corrective_action: string | null
          created_at: string
          id: string
          machine_id: string
          measured_at: string
          photo_path: string | null
          recorded_by: string | null
          temperature_c: number
          within_limit: boolean | null
        }
        Insert: {
          corrective_action?: string | null
          created_at?: string
          id?: string
          machine_id: string
          measured_at?: string
          photo_path?: string | null
          recorded_by?: string | null
          temperature_c: number
          within_limit?: boolean | null
        }
        Update: {
          corrective_action?: string | null
          created_at?: string
          id?: string
          machine_id?: string
          measured_at?: string
          photo_path?: string | null
          recorded_by?: string | null
          temperature_c?: number
          within_limit?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "temperature_logs_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
        ]
      }
      user_permissions: {
        Row: {
          created_at: string
          granted: boolean
          granted_by: string | null
          permission_key: string
          user_id: string
        }
        Insert: {
          created_at?: string
          granted?: boolean
          granted_by?: string | null
          permission_key: string
          user_id: string
        }
        Update: {
          created_at?: string
          granted?: boolean
          granted_by?: string | null
          permission_key?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_permissions_granted_by_fkey"
            columns: ["granted_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_permissions_permission_key_fkey"
            columns: ["permission_key"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["key"]
          },
          {
            foreignKeyName: "user_permissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      warehouse_stock: {
        Row: {
          expiry_date: string | null
          id: string
          product_id: string
          quantity: number
          updated_at: string
        }
        Insert: {
          expiry_date?: string | null
          id?: string
          product_id: string
          quantity?: number
          updated_at?: string
        }
        Update: {
          expiry_date?: string | null
          id?: string
          product_id?: string
          quantity?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "warehouse_stock_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      weather_config: {
        Row: {
          cold_threshold_c: number
          enabled: boolean
          hot_threshold_c: number
          id: number
          lat: number
          lng: number
          updated_at: string
        }
        Insert: {
          cold_threshold_c?: number
          enabled?: boolean
          hot_threshold_c?: number
          id?: number
          lat: number
          lng: number
          updated_at?: string
        }
        Update: {
          cold_threshold_c?: number
          enabled?: boolean
          hot_threshold_c?: number
          id?: number
          lat?: number
          lng?: number
          updated_at?: string
        }
        Relationships: []
      }
      weather_daily: {
        Row: {
          condition: string | null
          day: string
          fetched_at: string
          source: string
          temp_max_c: number | null
          temp_min_c: number | null
        }
        Insert: {
          condition?: string | null
          day: string
          fetched_at?: string
          source?: string
          temp_max_c?: number | null
          temp_min_c?: number | null
        }
        Update: {
          condition?: string | null
          day?: string
          fetched_at?: string
          source?: string
          temp_max_c?: number | null
          temp_min_c?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      machine_stock: {
        Row: {
          availability: string | null
          capacity: number | null
          image_url: string | null
          list_price_net: number | null
          machine_code: string | null
          machine_id: string | null
          machine_name: string | null
          par_level: number | null
          product_id: string | null
          product_name: string | null
          quantity: number | null
          tax_rate: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_rating_summary: {
        Row: {
          avg_rating: number | null
          product_id: string | null
          review_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_ratings_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      activate_offer: {
        Args: { p_offer_id: string }
        Returns: {
          activated_at: string
          customer_id: string
          id: string
          offer_id: string
          redeemed_at: string | null
        }
        SetofOptions: {
          from: "*"
          to: "offer_activations"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      activate_personal_offer: {
        Args: { p_offer_id: string }
        Returns: {
          activated_at: string | null
          created_at: string
          created_by: string | null
          customer_id: string
          discount_percent: number
          id: string
          image_url: string | null
          offer_price_net: number
          product_id: string
          redeemed_at: string | null
          redeemed_at_machine: string | null
          redemption_code: string
          regular_price_net: number
          source: string
          title: string
          valid_from: string
          valid_to: string
        }
        SetofOptions: {
          from: "*"
          to: "personal_offers"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      add_document_version: {
        Args: { p_document: string; p_file_path: string; p_notes?: string }
        Returns: {
          created_at: string
          created_by: string | null
          document_id: string
          file_path: string
          id: string
          notes: string | null
          version: number
        }
        SetofOptions: {
          from: "*"
          to: "document_versions"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      advertising_campaign_report: {
        Args: { p_campaign: string }
        Returns: Json
      }
      advertising_campaign_set: {
        Args: {
          p_bemerkung?: string
          p_bis?: string
          p_budget?: number
          p_business: string
          p_campaign?: string
          p_name: string
          p_von: string
          p_welt: "analog" | "digital" | "komplett"
          p_ziel_url?: string
        }
        Returns: string
      }
      advertising_campaign_status: {
        Args: {
          p_campaign: string
          p_status:
            | "draft"
            | "pending_review"
            | "approved"
            | "active"
            | "paused"
            | "completed"
            | "cancelled"
        }
        Returns: undefined
      }
      advertising_contract_set: {
        Args: {
          p_bemerkung?: string
          p_bis?: string
          p_business: string
          p_contract?: string
          p_kuendigungsfrist?: number
          p_motiv?: string
          p_preis_monat?: number
          p_space: string
          p_von: string
        }
        Returns: string
      }
      advertising_contract_status: {
        Args: {
          p_contract: string
          p_status:
            | "entwurf"
            | "zur_unterschrift"
            | "aktiv"
            | "beendet"
            | "gekuendigt"
        }
        Returns: undefined
      }
      advertising_coupon_sponsorship_set: {
        Args: {
          p_anlass:
            | "tagesangebot"
            | "geburtstag"
            | "meilenstein"
            | "jahrestag"
            | "persoenliches_angebot"
          p_bis: string
          p_campaign: string
          p_sponsorship?: string
          p_von: string
        }
        Returns: string
      }
      advertising_coupon_sponsorship_status: {
        Args: {
          p_sponsorship: string
          p_status:
            | "entwurf"
            | "zur_unterschrift"
            | "aktiv"
            | "beendet"
            | "gekuendigt"
        }
        Returns: undefined
      }
      advertising_creative_review: {
        Args: {
          p_creative: string
          p_notiz?: string
          p_status:
            | "draft"
            | "pending_review"
            | "approved"
            | "rejected"
            | "revision_required"
            | "active"
            | "expired"
        }
        Returns: undefined
      }
      advertising_creative_upload: {
        Args: {
          p_campaign: string
          p_file_url: string
          p_kind:
            | "motiv_flaeche"
            | "aushang"
            | "coupon_logo"
            | "social_post"
            | "news_beitrag"
            | "profil_logo"
        }
        Returns: string
      }
      advertising_motif_approve: {
        Args: { p_contract: string; p_wer: string }
        Returns: undefined
      }
      advertising_overview: { Args: { p_stichtag?: string }; Returns: Json }
      advertising_redirect_count: {
        Args: { p_campaign: string }
        Returns: undefined
      }
      advertising_space_remove: {
        Args: { p_space: string }
        Returns: undefined
      }
      advertising_space_set: {
        Args: {
          p_bemerkung?: string
          p_bezeichnung?: string
          p_breite_mm?: number
          p_hoehe_mm?: number
          p_machine: string
          p_position:
            | "front"
            | "seite_links"
            | "seite_rechts"
            | "oben"
            | "rueckseite"
            | "display"
          p_preis_monat?: number
          p_zustand?: "nutzbar" | "gesperrt" | "wartung"
        }
        Returns: string
      }
      anlage_pkw: { Args: { p_jahr: number }; Returns: Json }
      app_role: {
        Args: { uid?: string }
        Returns: "system_admin" | "shareholder" | "employee" | "customer"
      }
      approve_shareholder: {
        Args: {
          approval_id: string
          decision: "pending" | "approved" | "rejected"
          note?: string
        }
        Returns: {
          approved_by: string | null
          created_at: string
          decided_at: string | null
          id: string
          reason: string | null
          requested_by: string
          requested_for: string
          status: "pending" | "approved" | "rejected"
        }
        SetofOptions: {
          from: "*"
          to: "shareholder_approvals"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      auth_has_permission: {
        Args: { perm: string; uid?: string }
        Returns: boolean
      }
      business_budget_set: {
        Args: {
          p_business: string
          p_gueltig_bis?: string
          p_gueltig_von?: string
          p_monatslimit?: number
          p_profile?: string
          p_tageslimit?: number
          p_zuschuss?: number
        }
        Returns: string
      }
      business_create: {
        Args: {
          p_billing_city?: string
          p_billing_email?: string
          p_billing_street?: string
          p_billing_zip?: string
          p_legal_form?: string
          p_name: string
          p_tax_number?: string
          p_vat_id?: string
        }
        Returns: string
      }
      business_customers_csv: { Args: never; Returns: string }
      business_dashboard: {
        Args: { p_bis?: string; p_business: string; p_von?: string }
        Returns: Json
      }
      business_invitation_accept: { Args: { p_token: string }; Returns: Json }
      business_invitation_revoke: {
        Args: { p_invitation: string }
        Returns: undefined
      }
      business_invite: {
        Args: {
          p_business: string
          p_email: string
          p_role?: "admin" | "member"
          p_tage?: number
        }
        Returns: Json
      }
      business_invoice_release: { Args: { p_run: string }; Returns: undefined }
      business_invoice_request: {
        Args: { p_business: string; p_jahr: number; p_monat: number }
        Returns: Json
      }
      business_invoice_runs_list: {
        Args: { p_business: string }
        Returns: Json
      }
      business_location_set: {
        Args: { p_business: string; p_location: string; p_zuordnen?: boolean }
        Returns: Json
      }
      business_locations_list: { Args: { p_business: string }; Returns: Json }
      business_member_set: {
        Args: {
          p_business: string
          p_profile: string
          p_role?: "admin" | "member"
          p_status?: "invited" | "active" | "suspended" | "removed"
        }
        Returns: undefined
      }
      business_statement: {
        Args: { p_business: string; p_jahr: number; p_monat: number }
        Returns: Json
      }
      business_update: {
        Args: { p_business: string; p_werte: Json }
        Returns: Json
      }
      card_entitlements: {
        Args: { p_token: string }
        Returns: {
          customer_number: string
          discount_percent: number
        }[]
      }
      catalog_facts: { Args: never; Returns: Json }
      choose_subscription_plan: {
        Args: {
          p_age_consent?: boolean
          p_plan: string
          p_withdrawal_consent?: boolean
        }
        Returns: Json
      }
      create_invoice_for_purchase: {
        Args: { p_purchase_id: string }
        Returns: {
          billing_snapshot: Json
          created_at: string
          customer_id: string
          email_sent_at: string | null
          id: string
          invoice_number: string
          issued_at: string
          payment_method:
            | "cash"
            | "card_ec"
            | "card_credit"
            | "card_contactless"
            | "other"
          pdf_generated_at: string | null
          purchase_id: string
          total_gross: number
          total_net_19: number
          total_net_7: number
          total_vat_19: number
          total_vat_7: number
        }
        SetofOptions: {
          from: "*"
          to: "invoices"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      datev_export_rows: {
        Args: { p_from: string; p_to: string }
        Returns: {
          booking_date: string
          gross: number
          tax_rate: number
        }[]
      }
      deactivate_offer: { Args: { p_offer_id: string }; Returns: undefined }
      deactivate_personal_offer: {
        Args: { p_offer_id: string }
        Returns: {
          activated_at: string | null
          created_at: string
          created_by: string | null
          customer_id: string
          discount_percent: number
          id: string
          image_url: string | null
          offer_price_net: number
          product_id: string
          redeemed_at: string | null
          redeemed_at_machine: string | null
          redemption_code: string
          regular_price_net: number
          source: string
          title: string
          valid_from: string
          valid_to: string
        }
        SetofOptions: {
          from: "*"
          to: "personal_offers"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      decide_document_approval: {
        Args: {
          p_approval_id: string
          p_comment?: string
          p_decision: "pending" | "approved" | "rejected"
        }
        Returns: undefined
      }
      dev_add_demo_purchase: {
        Args: { p_payment_method?: string; p_total_gross?: number }
        Returns: {
          business_id: string | null
          created_at: string
          customer_id: string
          id: string
          machine_id: string | null
          payment_method:
            | "cash"
            | "card_ec"
            | "card_credit"
            | "card_contactless"
            | "other"
          purchased_at: string
          source: "nayax" | "manual" | "import" | "demo"
          source_ref: string | null
          total_gross: number
        }
        SetofOptions: {
          from: "*"
          to: "purchases"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      donation_causes_list: {
        Args: never
        Returns: {
          city: string
          created_at: string
          description: string
          id: string
          legal_name: string
          purpose: string
          receipt_eligible: boolean
          status: string
          title: string
          vote_count: number
          voted_by_me: boolean
          website: string
        }[]
      }
      donation_pool_summary: {
        Args: never
        Returns: {
          my_donated: number
          my_share_pct: number
          non_app_gross: number
          total_pool: number
        }[]
      }
      donation_rate: { Args: never; Returns: number }
      email_consent_grant: {
        Args: {
          p_proof_text: string
          p_source?: string
          p_topic: string
          p_user_agent?: string
        }
        Returns: boolean
      }
      email_consent_revoke: {
        Args: { p_source?: string; p_topic: string }
        Returns: boolean
      }
      email_consent_state: {
        Args: never
        Returns: {
          changed_at: string
          description: string
          granted: boolean
          label: string
          topic_key: string
        }[]
      }
      email_enqueue: {
        Args: {
          p_dedupe_key?: string
          p_profile: string
          p_scheduled_for?: string
          p_template_key: string
          p_to?: string
          p_vars?: Json
        }
        Returns: string
      }
      email_has_consent: {
        Args: { p_profile: string; p_topic: string }
        Returns: boolean
      }
      email_log_detail: {
        Args: { p_id: string }
        Returns: {
          created_at: string
          direction: string
          error: string
          from_address: string
          html: string
          id: string
          occurred_at: string
          provider_id: string
          status: string
          subject: string
          tag: string
          text_body: string
          to_addresses: string[]
        }[]
      }
      email_log_list: {
        Args: {
          p_direction?: string
          p_from?: string
          p_limit?: number
          p_offset?: number
          p_search?: string
          p_status?: string
          p_to?: string
        }
        Returns: {
          direction: string
          error: string
          from_address: string
          has_html: boolean
          has_text: boolean
          id: string
          occurred_at: string
          provider_id: string
          status: string
          subject: string
          tag: string
          to_addresses: string[]
          total_count: number
        }[]
      }
      email_log_stats: {
        Args: never
        Returns: {
          ausgehend: number
          eingehend: number
          gesamt: number
          gescheitert: number
          letzte_mail: string
          simuliert: number
        }[]
      }
      email_outbox_claim: {
        Args: { p_limit?: number }
        Returns: {
          attempts: number
          category: string
          id: string
          profile_id: string
          template_key: string
          to_address: string
          vars: Json
        }[]
      }
      email_outbox_mark: {
        Args: {
          p_error?: string
          p_id: string
          p_log_id?: string
          p_status: string
        }
        Returns: boolean
      }
      email_outbox_stats: {
        Args: never
        Returns: {
          aeltester: string
          anzahl: number
          status: string
        }[]
      }
      email_template_save: {
        Args: {
          p_body_html: string
          p_body_text?: string
          p_is_active?: boolean
          p_key: string
          p_preheader?: string
          p_subject: string
        }
        Returns: {
          body_html: string | null
          body_text: string | null
          category: string
          description: string | null
          is_active: boolean
          key: string
          label: string
          legal_note: string | null
          precondition: string | null
          preheader: string | null
          subject: string | null
          topic_key: string | null
          updated_at: string
          updated_by: string | null
          variables: string[]
        }
        SetofOptions: {
          from: "*"
          to: "email_templates"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      email_unsubscribe: {
        Args: { p_token: string }
        Returns: {
          ok: boolean
          topics_abgemeldet: number
        }[]
      }
      email_unsubscribe_token_for: {
        Args: { p_profile: string }
        Returns: string
      }
      ensure_my_special_offers: {
        Args: never
        Returns: {
          activated_at: string | null
          created_at: string
          created_by: string | null
          customer_id: string
          discount_percent: number
          id: string
          image_url: string | null
          offer_price_net: number
          product_id: string
          redeemed_at: string | null
          redeemed_at_machine: string | null
          redemption_code: string
          regular_price_net: number
          source: string
          title: string
          valid_from: string
          valid_to: string
        }[]
        SetofOptions: {
          from: "*"
          to: "personal_offers"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      export_my_data: { Args: never; Returns: Json }
      fetch_email_report_share: {
        Args: {
          p_client_hint?: string
          p_referer?: string
          p_token: string
          p_user_agent?: string
        }
        Returns: Json
      }
      finance_balance_kpis: { Args: never; Returns: Json }
      finance_bookings_list: {
        Args: {
          p_from: string
          p_limit?: number
          p_offset?: number
          p_to: string
        }
        Returns: Json
      }
      finance_kpis: { Args: { p_from: string; p_to: string }; Returns: Json }
      finance_summary: { Args: { p_from: string; p_to: string }; Returns: Json }
      generate_daily_offers: {
        Args: { p_count?: number }
        Returns: {
          created_at: string
          created_by: string | null
          description: string | null
          discount_percent: number | null
          id: string
          image_path: string | null
          image_url: string | null
          kind: string
          offer_price_net: number | null
          product_id: string | null
          regular_price_net: number | null
          status: "active" | "inactive" | "archived"
          title: string
          updated_at: string
          updated_by: string | null
          valid_from: string
          valid_to: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "offers"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      generate_personal_offer: {
        Args: { p_customer_id: string }
        Returns: {
          activated_at: string | null
          created_at: string
          created_by: string | null
          customer_id: string
          discount_percent: number
          id: string
          image_url: string | null
          offer_price_net: number
          product_id: string
          redeemed_at: string | null
          redeemed_at_machine: string | null
          redemption_code: string
          regular_price_net: number
          source: string
          title: string
          valid_from: string
          valid_to: string
        }
        SetofOptions: {
          from: "*"
          to: "personal_offers"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      generate_weekly_offers: {
        Args: { p_count?: number }
        Returns: {
          created_at: string
          created_by: string | null
          description: string | null
          discount_percent: number | null
          id: string
          image_path: string | null
          image_url: string | null
          kind: string
          offer_price_net: number | null
          product_id: string | null
          regular_price_net: number | null
          status: "active" | "inactive" | "archived"
          title: string
          updated_at: string
          updated_by: string | null
          valid_from: string
          valid_to: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "offers"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      grant_anniversary_offer: {
        Args: { p_customer_id: string }
        Returns: {
          activated_at: string | null
          created_at: string
          created_by: string | null
          customer_id: string
          discount_percent: number
          id: string
          image_url: string | null
          offer_price_net: number
          product_id: string
          redeemed_at: string | null
          redeemed_at_machine: string | null
          redemption_code: string
          regular_price_net: number
          source: string
          title: string
          valid_from: string
          valid_to: string
        }
        SetofOptions: {
          from: "*"
          to: "personal_offers"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      grant_birthday_offer: {
        Args: { p_customer_id: string }
        Returns: {
          activated_at: string | null
          created_at: string
          created_by: string | null
          customer_id: string
          discount_percent: number
          id: string
          image_url: string | null
          offer_price_net: number
          product_id: string
          redeemed_at: string | null
          redeemed_at_machine: string | null
          redemption_code: string
          regular_price_net: number
          source: string
          title: string
          valid_from: string
          valid_to: string
        }
        SetofOptions: {
          from: "*"
          to: "personal_offers"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      has_paid_subscription: { Args: { p_profile: string }; Returns: boolean }
      inventory_fifo_lots: {
        Args: { p_to?: string }
        Returns: {
          invoice_date: string
          invoice_number: string
          lot_discount: number
          lot_expiry: string
          lot_gross: number
          lot_net: number
          mhd_days_left: number
          mhd_pct: number
          product_id: string
          product_name: string
          received_qty: number
          remaining_qty: number
          sku: string
          unit_cost: number
        }[]
      }
      inventory_fifo_movements: {
        Args: { p_from: string; p_to?: string }
        Returns: {
          invoice_date: string
          invoice_number: string
          lot_expiry: string
          machine_code: string
          machine_name: string
          occurred_at: string
          product_id: string
          product_name: string
          quantity_delta: number
          reason: string
          sku: string
          type: string
          unit_cost: number
        }[]
      }
      inventory_report: {
        Args: { p_from: string; p_to?: string }
        Returns: {
          capacity: number
          correction: number
          disposal: number
          end_qty: number
          expiry_date: string
          gross_value: number
          machine_code: string
          machine_id: string
          machine_name: string
          mhd_days_left: number
          mhd_discount: number
          mhd_pct: number
          net_value: number
          product_id: string
          product_name: string
          refill: number
          sales: number
          sku: string
          start_qty: number
          unit_cost: number
        }[]
      }
      inventory_summary_by_product: {
        Args: never
        Returns: {
          in_machines_qty: number
          in_warehouse_qty: number
          product_id: string
          product_name: string
          sku: string
          total_qty: number
          total_value: number
          unit_cost: number
        }[]
      }
      invite_employee_signature: {
        Args: { p_document: string; p_employee: string }
        Returns: string
      }
      is_admin: { Args: { uid?: string }; Returns: boolean }
      is_internal: { Args: { uid?: string }; Returns: boolean }
      is_shareholder: { Args: { uid?: string }; Returns: boolean }
      ki_funktion_freigegeben: { Args: { p_key: string }; Returns: boolean }
      lead_activity_add: {
        Args: { p_lead: string; p_text: string }
        Returns: string
      }
      lead_create: {
        Args: {
          p_company_name: string
          p_contact_name?: string
          p_email?: string
          p_kind:
            | "advertising"
            | "ad_space"
            | "sponsoring"
            | "partnership"
            | "recruiting"
            | "event"
            | "business"
          p_message?: string
          p_phone?: string
          p_source?: string
        }
        Returns: string
      }
      lead_status_set: {
        Args: {
          p_lead: string
          p_notiz?: string
          p_status:
            | "new"
            | "qualified"
            | "contacted"
            | "meeting"
            | "offer"
            | "negotiation"
            | "won"
            | "lost"
        }
        Returns: undefined
      }
      leads_list: {
        Args: {
          p_status?:
            | "new"
            | "qualified"
            | "contacted"
            | "meeting"
            | "offer"
            | "negotiation"
            | "won"
            | "lost"
        }
        Returns: Json
      }
      legal_text_abrufen: { Args: { p_branch?: string }; Returns: number }
      legal_text_uebernehmen: {
        Args: { p_request_id: number }
        Returns: {
          o_slug: string
          o_zeichen: number
        }[]
      }
      lifetime_founders_status: { Args: never; Returns: Json }
      link_partner_signature_profile: {
        Args: { p_profile_id: string; p_signature_id: string }
        Returns: undefined
      }
      list_document_approvals: {
        Args: { p_mine_only?: boolean }
        Returns: {
          decisions: Json
          document_kind:
            | "inventory_fifo"
            | "haccp_temperature"
            | "haccp_cleaning"
            | "haccp_disposal"
            | "haccp_filling"
            | "haccp_maintenance"
            | "haccp_cash"
            | "haccp_training"
            | "finance_period"
            | "document_review"
            | "anlage_pkw"
          draft_pdf_path: string
          final_pdf_path: string
          id: string
          my_decision: "pending" | "approved" | "rejected"
          period_from: string
          period_to: string
          requested_at: string
          requested_by: string
          status: "pending" | "approved" | "rejected"
          title: string
        }[]
      }
      list_document_folders: {
        Args: never
        Returns: {
          icon: string
          label: string
          slug: string
          sort_order: number
        }[]
      }
      list_document_signature_tasks: {
        Args: { p_document: string }
        Returns: {
          document_version: number
          employee_id: string
          employee_name: string
          id: string
          invited_at: string
          signed_at: string
          signed_pdf_path: string
          status: string
        }[]
      }
      list_documents: {
        Args: never
        Returns: {
          category: string
          current_version: number
          expiry_status: string
          folder_label: string
          folder_order: number
          id: string
          is_template: boolean
          latest_file_path: string
          status: string
          title: string
          updated_at: string
          valid_until: string
        }[]
      }
      list_employees_for_signature: {
        Args: never
        Returns: {
          email: string
          full_name: string
          id: string
        }[]
      }
      list_my_signature_tasks: {
        Args: never
        Returns: {
          document_category: string
          document_id: string
          document_title: string
          document_version: number
          id: string
          invited_at: string
          latest_file_path: string
          signed_at: string
          status: string
        }[]
      }
      list_news: {
        Args: { p_limit?: number }
        Returns: {
          body: string
          created_at: string
          id: string
          image_url: string | null
          is_published: boolean
          published_at: string
          summary: string | null
          title: string
        }[]
        SetofOptions: {
          from: "*"
          to: "news_articles"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      list_partner_signatures: {
        Args: never
        Returns: {
          captured_at: string | null
          captured_via: string | null
          created_at: string
          docusign_account_id: string | null
          docusign_envelope_id: string | null
          docusign_signature_uri: string | null
          docusign_user_id: string | null
          full_name: string
          id: string
          image_url: string | null
          profile_id: string | null
          role_label: string
          sort_order: number
        }[]
        SetofOptions: {
          from: "*"
          to: "partner_signatures"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      mark_all_notifications_read: { Args: never; Returns: undefined }
      mark_notification_read: { Args: { p_key: string }; Returns: undefined }
      my_active_personal_offer: {
        Args: never
        Returns: {
          activated_at: string | null
          created_at: string
          created_by: string | null
          customer_id: string
          discount_percent: number
          id: string
          image_url: string | null
          offer_price_net: number
          product_id: string
          redeemed_at: string | null
          redeemed_at_machine: string | null
          redemption_code: string
          regular_price_net: number
          source: string
          title: string
          valid_from: string
          valid_to: string
        }
        SetofOptions: {
          from: "*"
          to: "personal_offers"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      my_active_personal_offers: {
        Args: never
        Returns: {
          activated_at: string | null
          created_at: string
          created_by: string | null
          customer_id: string
          discount_percent: number
          id: string
          image_url: string | null
          offer_price_net: number
          product_id: string
          redeemed_at: string | null
          redeemed_at_machine: string | null
          redemption_code: string
          regular_price_net: number
          source: string
          title: string
          valid_from: string
          valid_to: string
        }[]
        SetofOptions: {
          from: "*"
          to: "personal_offers"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      my_advertising_campaigns: { Args: never; Returns: Json }
      my_advertising_contracts: { Args: never; Returns: Json }
      my_businesses: { Args: never; Returns: Json }
      my_customer_card: { Args: never; Returns: string }
      my_donation_summary: {
        Args: never
        Returns: {
          purchase_count: number
          total_donated: number
        }[]
      }
      my_donations_by_purchase: {
        Args: never
        Returns: {
          donation: number
          invoice_id: string
          invoice_number: string
          payment_method: string
          purchase_id: string
          purchased_at: string
          share_pct: number
          total_gross: number
          total_net: number
        }[]
      }
      my_gamification_status: { Args: never; Returns: Json }
      my_invoices: {
        Args: never
        Returns: {
          billing_snapshot: Json
          created_at: string
          customer_id: string
          email_sent_at: string | null
          id: string
          invoice_number: string
          issued_at: string
          payment_method:
            | "cash"
            | "card_ec"
            | "card_credit"
            | "card_contactless"
            | "other"
          pdf_generated_at: string | null
          purchase_id: string
          total_gross: number
          total_net_19: number
          total_net_7: number
          total_vat_19: number
          total_vat_7: number
        }[]
        SetofOptions: {
          from: "*"
          to: "invoices"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      my_login_week: { Args: never; Returns: Json }
      my_loyalty_status: {
        Args: never
        Returns: {
          month_start: string
          next_reset: string
          next_tier: number
          points: number
          points_to_next: number
          reached_tiers: number[]
        }[]
      }
      my_notifications: {
        Args: { p_limit?: number }
        Returns: {
          created_at: string
          is_read: boolean
          key: string
          kind: string
          subtitle: string
          title: string
        }[]
      }
      my_notifications_unread_count: { Args: never; Returns: number }
      my_permissions: { Args: never; Returns: string[] }
      my_receipts: { Args: never; Returns: Json }
      my_referral_code: { Args: never; Returns: string }
      my_referral_status: { Args: never; Returns: Json }
      my_store_subscription: {
        Args: never
        Returns: {
          auto_renew: boolean
          bezahlt: boolean
          expires_at: string
          product_id: string
          status: string
          store: string
        }[]
      }
      my_subscription: { Args: never; Returns: Json }
      my_subscription_benefits: { Args: never; Returns: Json }
      next_invoice_number: { Args: never; Returns: string }
      product_availability: {
        Args: { p_product_id: string }
        Returns: {
          availability: string
          city: string
          lat: number
          lng: number
          location_name: string
          machine_code: string
          machine_id: string
          machine_name: string
          quantity: number
          street: string
          zip: string
        }[]
      }
      product_detail: {
        Args: { p_product_id: string }
        Returns: {
          allergens: string[]
          avg_rating: number
          carbs_g: number
          category: string
          energy_kcal: number
          fat_g: number
          id: string
          image_url: string
          list_price_net: number
          my_rating: number
          name: string
          protein_g: number
          review_count: number
          salt_g: number
          saturated_fat_g: number
          sugars_g: number
          tax_rate: number
        }[]
      }
      produktbild_register: { Args: never; Returns: Json }
      purchase_donation: { Args: { p_gross: number }; Returns: number }
      purchase_net: { Args: { p_gross: number }; Returns: number }
      rate_product: {
        Args: { p_product_id: string; p_rating: number }
        Returns: undefined
      }
      record_daily_login: { Args: never; Returns: Json }
      redeem_personal_offer: {
        Args: { p_code: string; p_machine_id?: string }
        Returns: {
          activated_at: string | null
          created_at: string
          created_by: string | null
          customer_id: string
          discount_percent: number
          id: string
          image_url: string | null
          offer_price_net: number
          product_id: string
          redeemed_at: string | null
          redeemed_at_machine: string | null
          redemption_code: string
          regular_price_net: number
          source: string
          title: string
          valid_from: string
          valid_to: string
        }
        SetofOptions: {
          from: "*"
          to: "personal_offers"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      register_referral: { Args: { p_code: string }; Returns: Json }
      register_telemetry_provider: {
        Args: {
          p_adapter: "generic" | "clevermetrics" | "nayax" | "custom"
          p_hmac_secret: string
          p_name: string
          p_notes?: string
        }
        Returns: string
      }
      request_account_deletion: {
        Args: { p_reason?: string }
        Returns: {
          handled_at: string | null
          handled_by: string | null
          id: string
          note: string | null
          profile_id: string
          reason: string | null
          requested_at: string
          status: string
        }
        SetofOptions: {
          from: "*"
          to: "account_deletion_requests"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      request_document_approval: {
        Args: {
          p_document_kind:
            | "inventory_fifo"
            | "haccp_temperature"
            | "haccp_cleaning"
            | "haccp_disposal"
            | "haccp_filling"
            | "haccp_maintenance"
            | "haccp_cash"
            | "haccp_training"
            | "finance_period"
            | "document_review"
            | "anlage_pkw"
          p_draft_path?: string
          p_period_from: string
          p_period_to: string
          p_snapshot: Json
          p_title: string
        }
        Returns: string
      }
      request_document_review: { Args: { p_document: string }; Returns: string }
      rotate_provider_secret: {
        Args: { p_new_secret: string; p_provider_id: string }
        Returns: undefined
      }
      run_daily_special_offers: { Args: never; Returns: number }
      search_products: {
        Args: {
          p_category?: string
          p_limit?: number
          p_query: string
          p_subcategory?: string
        }
        Returns: {
          available_machines: number
          avg_rating: number
          category: string
          id: string
          image_url: string
          list_price_net: number
          name: string
          review_count: number
          subcategory: string
          tax_rate: number
        }[]
      }
      set_document_valid_until: {
        Args: { p_document: string; p_valid_until: string }
        Returns: undefined
      }
      set_machine_slot: {
        Args: {
          p_capacity?: number
          p_machine_id: string
          p_product_id: string
          p_slot_code: string
          p_unit_price_net: number
        }
        Returns: undefined
      }
      set_partner_signature_image: {
        Args: {
          p_captured_via?: string
          p_image_url: string
          p_signature_id: string
        }
        Returns: undefined
      }
      settle_due_referrals: { Args: never; Returns: number }
      sponsorship_set: {
        Args: {
          p_bemerkung?: string
          p_beteiligung?: number
          p_betrag: number
          p_bis?: string
          p_business: string
          p_location: string
          p_sponsorship?: string
          p_von: string
        }
        Returns: string
      }
      sponsorship_status: {
        Args: {
          p_sponsorship: string
          p_status:
            | "entwurf"
            | "zur_unterschrift"
            | "aktiv"
            | "beendet"
            | "gekuendigt"
        }
        Returns: undefined
      }
      store_notification_apply: {
        Args: {
          p_auto_renew: boolean
          p_environment: string
          p_event_at: string
          p_expires_at: string
          p_notification_id: string
          p_notification_type: string
          p_product_id: string
          p_raw: Json
          p_status: string
          p_store: string
          p_store_ref: string
          p_subtype: string
        }
        Returns: string
      }
      store_subscription_claim: {
        Args: { p_store: string; p_store_ref: string }
        Returns: boolean
      }
      submit_employee_signature: {
        Args: { p_ip_hash?: string; p_png_path: string; p_task: string }
        Returns: undefined
      }
      subscription_plans: {
        Args: never
        Returns: {
          billing_label: string
          plan: string
          price_cents: number
          sort_order: number
        }[]
      }
      suggest_donation_cause: {
        Args: { p_description: string; p_title: string }
        Returns: {
          city: string | null
          contact_email: string | null
          country: string
          created_at: string
          deleted_at: string | null
          description: string | null
          id: string
          legal_name: string | null
          purpose: string | null
          receipt_eligible: boolean
          registration_ref: string | null
          status: string
          street: string | null
          suggested_by: string | null
          tax_number: string | null
          tax_office: string | null
          title: string
          verified_at: string | null
          verified_by: string | null
          website: string | null
          zip: string | null
        }
        SetofOptions: {
          from: "*"
          to: "donation_causes"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      top_products_by_category: {
        Args: { p_category: string; p_limit?: number }
        Returns: {
          avg_rating: number
          category: string
          id: string
          image_url: string
          list_price_net: number
          name: string
          review_count: number
          tax_rate: number
        }[]
      }
      upsert_finance_balance: {
        Args: {
          p_as_of: string
          p_cash_and_bank: number
          p_current_liabilities: number
          p_equity: number
          p_fixed_assets: number
          p_inventory_value: number
          p_long_term_liabilities: number
          p_other_current_assets: number
          p_receivables: number
        }
        Returns: {
          as_of: string
          cash_and_bank: number
          created_at: string
          created_by: string | null
          current_liabilities: number
          equity: number
          fixed_assets: number
          id: string
          inventory_value: number
          long_term_liabilities: number
          other_current_assets: number
          receivables: number
          source: string
          updated_at: string
        }
        SetofOptions: {
          from: "*"
          to: "finance_balance_snapshots"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      upsert_finance_balance_synced: {
        Args: {
          p_as_of: string
          p_cash_and_bank: number
          p_current_liabilities: number
          p_equity: number
          p_fixed_assets: number
          p_inventory_value: number
          p_long_term_liabilities: number
          p_other_current_assets: number
          p_receivables: number
        }
        Returns: {
          as_of: string
          cash_and_bank: number
          created_at: string
          created_by: string | null
          current_liabilities: number
          equity: number
          fixed_assets: number
          id: string
          inventory_value: number
          long_term_liabilities: number
          other_current_assets: number
          receivables: number
          source: string
          updated_at: string
        }
        SetofOptions: {
          from: "*"
          to: "finance_balance_snapshots"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      vote_donation_cause: { Args: { p_cause_id: string }; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
